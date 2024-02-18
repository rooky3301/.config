import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

interface Cards {
  change?: {
    change: React.ReactNode;
    changeType: "increase" | "decrease";
  };
  footer?: {
    footerLink: string;
    footerText: string;
  };
  id: number;
  name: string;
  stat: string;
  icon: React.ReactNode;
}

interface CardProps {
  className?: string;
  loading?: boolean;
  cards: Cards[];
}

export default function CardWithdrawal(props: CardProps) {
  const router = useRouter();

  return (
    <div
      className={`${
        props.className || ""
      } grid-auto-fit grid grid-cols-2 gap-4`}
    >
      {props.cards.map((item) => (
        <div
          key={item.id}
          className={`relative bg-transparent border border-solid border-green-300 px-4 pt-5 ${
            item.footer ? "pb-12" : ""
          } overflow-hidden rounded-lg shadow sm:px-4 sm:pt-6`}
        ></div>
      ))}
    </div>
  );
}
