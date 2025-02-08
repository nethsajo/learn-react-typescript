import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/routes';
import { ChevronLeft, Minus, Plus, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const navigate = useNavigate();
  return (
    <div className="space-y-6">
      <Button variant="link" className="px-0" onClick={() => navigate(ROUTES.MENU)}>
        <ChevronLeft className="stroke-current" />
        Back to menu
      </Button>
      <div className="grid gap-12 lg:grid-cols-[5fr_2.5fr] lg:gap-36">
        <div className="min-w-0 space-y-6">
          <div className="flex items-center justify-between space-x-4">
            <h2 className="text-xl font-semibold text-zinc-800">Your cart, %NAME%</h2>
            <Button variant="ghost">Clear</Button>
          </div>
          <div className="relative w-full overflow-x-auto">
            <table className="w-full caption-top text-sm">
              <thead className="bg-zinc-100 [&_tr]:border-b">
                <tr className="border-b border-b-zinc-200">
                  <th className="h-12  px-4 text-left align-middle font-medium text-zinc-500">
                    Name
                  </th>
                  <th className="h-12 w-7 px-4 text-center align-middle font-medium text-zinc-500">
                    Quantity
                  </th>
                  <th className="h-12 px-4 text-right align-middle font-medium text-zinc-500">
                    Price
                  </th>
                  <th className="h-12 px-4 text-right align-middle font-medium text-zinc-500">
                    Subtotal
                  </th>
                  <th className="h-12 w-6 px-4 text-right align-middle font-medium text-zinc-500">
                    &nbsp;
                  </th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                <tr className="border-b border-b-zinc-200">
                  <td className="p-4 align-middle">Margherita</td>
                  <td className="p-4 text-center align-middle">
                    <div className="grid grid-cols-[24px_auto_24px] items-center gap-4">
                      <Button variant="outline" size="icon" className="h-6 w-6">
                        <Minus></Minus>
                      </Button>
                      <div className="font-semibold">1</div>
                      <Button variant="outline" size="icon" className="h-6 w-6">
                        <Plus />
                      </Button>
                    </div>
                  </td>
                  <td className="p-4 text-right align-middle">$12.00</td>
                  <td className="p-4 text-right align-middle">$12.00</td>
                  <td className="p-4 text-right align-middle">
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <X />
                    </Button>
                  </td>
                </tr>
                <tr className="border-b border-b-zinc-200">
                  <td className="p-4 align-middle">Hawaiian</td>
                  <td className="p-4 text-center align-middle">
                    <div className="grid grid-cols-[24px_auto_24px] items-center gap-4">
                      <Button variant="outline" size="icon" className="h-6 w-6">
                        <Minus></Minus>
                      </Button>
                      <div className="font-semibold">2</div>
                      <Button variant="outline" size="icon" className="h-6 w-6">
                        <Plus />
                      </Button>
                    </div>
                  </td>
                  <td className="p-4 text-right align-middle">$15.00</td>
                  <td className="p-4 text-right align-middle">$30.00</td>
                  <td className="p-4 text-right align-middle">
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <X />
                    </Button>
                  </td>
                </tr>
                <tr className="border-b border-b-zinc-200">
                  <td className="p-4 align-middle"></td>
                  <td className="p-4 align-middle"></td>
                  <td className="p-4 text-right align-middle font-bold">Total</td>
                  <td className="p-4 text-right align-middle font-bold">$42.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-lg border border-l-4 border-l-red-500 p-6 shadow-sm">
            <div className="text-xl font-semibold">Order Summary</div>
            <div className="relative w-full overflow-x-auto">
              <table className="w-full caption-top text-base">
                <tbody className="[&_tr:last-child]:border-0">
                  <tr className="border-b border-b-zinc-200">
                    <td className="p-4 pl-0 text-left align-middle font-medium text-zinc-500">
                      Subtotal
                    </td>
                    <td className="p-4 pr-0 text-right align-middle font-bold">$42.00</td>
                  </tr>
                  <tr className="border-b border-b-zinc-200">
                    <td className="p-4 pl-0 text-left align-middle font-medium text-zinc-500">
                      Delivery
                    </td>
                    <td className="p-4 pr-0 text-right align-middle font-bold">FREE</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="">
            <Button variant="destructive">Proceed to Checkout</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
