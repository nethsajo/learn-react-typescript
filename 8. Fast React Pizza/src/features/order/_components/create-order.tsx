import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { type Cart } from '@/features/cart/_types/cart';
import { Form } from 'react-router-dom';

export default function CreateOrder() {
  const fakeCart: Cart = [
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
      <Form method="POST" action="/order?index">
        <div className="grid grid-cols-4 gap-x-4 gap-y-3">
          <div className="col-span-full flex flex-col space-y-1.5 sm:col-span-2">
            <Label htmlFor="name">Full Name</Label>
            <Input name="name" id="name" variant="outline" required />
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
        <Button className="mt-6">Order now</Button>
      </Form>
    </div>
  );
}

export const orderDataAction = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  return null;
};
