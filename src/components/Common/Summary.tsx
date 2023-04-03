import { cls } from '@/utils';
import { PropsWithChildren, ReactNode } from 'react';

interface OrderSummaryProps {
  title: string;
  totalPrice: string;
  transparent?: boolean;
  rightAddon?: ReactNode;
}
function OrderSummary({ title, totalPrice, transparent, rightAddon }: PropsWithChildren<OrderSummaryProps>) {
  const bgColor = transparent ? 'bg-transparent' : 'bg-white';
  return (
    <div className={cls('h-full w-full flex flex-col justify-evenly gap-16', bgColor)}>
      <div className="flex flex-col">
        <div className="text-2xl text-black  font-thin">{title}</div>
      </div>
      <div className="flex justify-between">
        <div className="font-bold text-lg">총 결제금액</div>
        <div className="font-bold text-lg">{totalPrice}원</div>
      </div>
      <div className="">{rightAddon}</div>
    </div>
  );
}

export default OrderSummary;
