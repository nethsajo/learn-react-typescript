import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ROUTES } from '@/constants/routes';
import { type Cart } from '@/features/cart/_types/cart';
import { type User } from '@/features/user/_types/user';
import { Form, redirect } from 'react-router-dom';
import { createOrderData } from '../_data/create-order';

export default function CreateOrder() {
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
    <div className="flex flex-col space-y-8">
      <h2 className="font-bold">Ready to order? Let&apos;s go!</h2>
      <Form method="POST">
        <div className="grid grid-cols-4 gap-x-4 gap-y-3">
          <div className="col-span-full flex flex-col space-y-1.5 sm:col-span-2">
            <Label htmlFor="customer">Full Name</Label>
            <Input name="customer" id="customer" variant="outline" required />
          </div>

          <div className="col-span-full flex flex-col space-y-1.5 sm:col-span-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input name="phone" id="phone" variant="outline" required />
          </div>

          <div className="col-span-full flex flex-col space-y-1.5">
            <Label htmlFor="address">Address</Label>
            <Input name="address" id="address" variant="outline" required />
          </div>
          <div className="col-span-full flex space-y-1.5">
            <input
              type="checkbox"
              name="priority"
              id="priority"
              // value={withPriority}
              // onChange={(e) => setWithPriority(e.target.checked)}
            />
            <label htmlFor="priority">Want to yo give your order priority?</label>
          </div>
        </div>
        <input type="hidden" name="cart" value={JSON.stringify(fakeCart)} />
        <Button type="submit" className="mt-6">
          Order now
        </Button>
      </Form>
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

  const createdOrder = await createOrderData(order);

  return redirect(`${ROUTES.ORDER}/${createdOrder.id}`);
};
