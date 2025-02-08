import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ROUTES } from '@/constants/routes';
import { type Cart } from '@/features/cart/_types/cart';
import { type User } from '@/features/user/_types/user';
import { Locate } from 'lucide-react';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrderData } from '../_data/create-order';

const isValidPhone = (number: string) => {
  return /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    number
  );
};

type FormErrors = {
  phone?: string;
};

export default function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const formErrors = useActionData() as FormErrors;

  const fakeCart: Cart[] = [
    {
      pizzaId: 12,
      name: 'Mediterranean',
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
    {
      pizzaId: 6,
      name: 'Vegetale',
      quantity: 1,
      unitPrice: 13,
      totalPrice: 13,
    },
    {
      pizzaId: 11,
      name: 'Spinach and Mushroom',
      quantity: 1,
      unitPrice: 15,
      totalPrice: 15,
    },
  ];

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="flex flex-col space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-zinc-900">Ready to order? Let&apos;s go!</h2>
          <p className="text-zinc-500">Fill in your details below to place your order.</p>
        </div>
        <Form method="POST">
          <div className="grid grid-cols-4 gap-6">
            <div className="col-span-full flex flex-col space-y-2 sm:col-span-2">
              <Label htmlFor="customer">Full Name</Label>
              <Input
                name="customer"
                id="customer"
                variant="outline"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="col-span-full flex flex-col space-y-2 sm:col-span-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                name="phone"
                id="phone"
                variant="outline"
                placeholder="(555) 555-5555"
                required
              />
              {formErrors?.phone && <p className="text-xs text-red-500">{formErrors.phone}</p>}
            </div>
            <div className="col-span-full flex flex-col space-y-2">
              <Label htmlFor="address">Address</Label>
              <div className="flex space-x-2">
                <Input
                  name="address"
                  id="address"
                  variant="outline"
                  placeholder="123 Main St, New York City, United States"
                  required
                />
                <Button variant="outline">
                  <Locate />
                </Button>
              </div>
            </div>
            <div className="col-span-full flex items-start space-x-2">
              <input
                type="checkbox"
                name="priority"
                id="priority"
                // value={withPriority}
                // onChange={(e) => setWithPriority(e.target.checked)}
              />
              <div className="flex flex-col">
                <label htmlFor="priority text-zinc-900 font-semibold">Priority Order</label>
                <p className="text-zinc-500">Get your order prioritized for faster processing</p>
              </div>
            </div>
          </div>
          <input type="hidden" name="cart" value={JSON.stringify(fakeCart)} />
          <Button type="submit" variant="destructive" className="mt-6" disabled={isSubmitting}>
            {isSubmitting ? 'Placing your order...' : 'Place Order'}
          </Button>
        </Form>
      </div>
    </div>
  );
}

type OrderDetails = User & {
  cart: string;
  priority: string;
};

export const orderDataAction = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData) as OrderDetails;

  const order = {
    ...data,
    cart: JSON.parse(data.cart) as Cart[],
    priority: data.priority === 'on',
  };

  const errors = {} as FormErrors;

  if (!isValidPhone(order.phone)) {
    errors.phone = ' Please give us your correct phone number. We might need it to contact you.';
  }

  if (Object.keys(errors).length > 0) return errors;

  // If everything is okay, create new order and redirect
  const createdOrder = await createOrderData(order);

  return redirect(`${ROUTES.ORDER}/${createdOrder.id}`);
};
