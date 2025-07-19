import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/routes';
import { formatCurrency } from '@/utils/format-currency';
import { ChevronLeft, Minus, Plus, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const fakeCart = [
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

export default function Cart() {
  const navigate = useNavigate();

  const cart = fakeCart;

  const total = cart.reduce((accumulator, item) => accumulator + item.totalPrice, 0);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <Button variant="link" className="px-0" onClick={() => navigate(ROUTES.MENU)}>
          <ChevronLeft className="stroke-current" />
          Back to menu
        </Button>
        <div className="grid gap-10">
          <div className="min-w-0 space-y-6">
            <div className="flex items-center justify-between space-x-4">
              <h2 className="text-xl font-semibold text-zinc-800">Your cart, %NAME%</h2>
              <Button variant="ghost">Clear</Button>
            </div>
            <div className="relative w-full overflow-x-auto">
              <table className="w-full caption-top text-sm">
                <thead className="bg-gradient-to-r from-red-600 to-red-700 [&_tr]:border-b">
                  <tr className="border-b border-b-zinc-200">
                    <th className="h-12  px-4 text-left align-middle font-medium text-white">
                      Name
                    </th>
                    <th className="h-12 w-7 px-4 text-center align-middle font-medium text-white">
                      Quantity
                    </th>
                    <th className="h-12 px-4 text-right align-middle font-medium text-white">
                      Price
                    </th>
                    <th className="h-12 px-4 text-right align-middle font-medium text-white">
                      Subtotal
                    </th>
                    <th className="h-12 w-6 px-4 text-right align-middle font-medium text-white">
                      &nbsp;
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {cart.map((item, index) => (
                    <tr key={index}>
                      <td className="p-4 align-middle">{item.name}</td>
                      <td className="p-4 text-center align-middle">
                        <div className="grid grid-cols-[24px_auto_24px] items-center gap-4">
                          <Button variant="outline" size="icon" className="h-6 w-6">
                            <Minus></Minus>
                          </Button>
                          <div className="font-semibold">{item.quantity}</div>
                          <Button variant="outline" size="icon" className="h-6 w-6">
                            <Plus />
                          </Button>
                        </div>
                      </td>
                      <td className="p-4 text-right align-middle font-medium">
                        {formatCurrency(item.unitPrice)}
                      </td>
                      <td className="p-4 text-right align-middle font-semibold">
                        {formatCurrency(item.totalPrice)}
                      </td>
                      <td className="p-4 text-right align-middle">
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <X />
                        </Button>
                      </td>
                    </tr>
                  ))}
                  <tr className="border-b border-b-zinc-200">
                    <td className="p-4 align-middle"></td>
                    <td className="p-4 align-middle"></td>
                    <td className="p-4 text-right align-middle font-bold">Total</td>
                    <td className="p-4 text-right align-middle font-bold">
                      {formatCurrency(total)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-zinc-800">Order Summary</h2>
              <div className="relative w-full overflow-x-auto">
                <table className="w-full caption-top text-sm">
                  <tbody className="divide-y">
                    <tr>
                      <td className="p-4 text-left align-middle font-medium">Subtotal</td>
                      <td className="p-4 text-right align-middle font-bold">
                        {formatCurrency(total)}
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 text-left align-middle font-medium">VAT</td>
                      <td className="p-4 text-right align-middle font-bold">$47.04</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-left align-middle font-medium">Delivery</td>
                      <td className="p-4 text-right align-middle font-bold">FREE</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex justify-end">
              <Button size="md" variant="destructive">
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
