import { stack } from "./Stack-Helper";
import "./Stack.scss";
import Tech from "./Tech";

export default function Stack() {
  return (
    <div className="w-screen h-screen">
      <div className="w-full flex justify-center items-center">
        <div className="w-4/5">
          <h3 className="p-10 text-2xl w-fit text-white">MY STACK</h3>
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="w-4/5 flex justify-center flex-wrap gap-16">
          {stack.map((item) => (
            <Tech key={item.name} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
