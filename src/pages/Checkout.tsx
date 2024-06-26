import Back from "../components/Back";
import { useEffect, useState } from "react";
import Summary from "../components/Summary";
import { motion, AnimatePresence } from "framer-motion";
import ThankyouModal from "../components/ThankyouModal";

interface Details {
  name: string;
  email: string;
  phone: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  method: string;
}

type CheckoutProps = {
  details: Details;
  setDetails: (details: Details) => void;
};

export const Checkout: React.FC<CheckoutProps> = ({ details, setDetails }) => {
  const [paypal, setPaypal] = useState(false);
  const [credit, setCredit] = useState(false);
  const [checkoutClicked, setCheckoutClicked] = useState<boolean>(false)

  useEffect(() => {
    if (details.method === "paypal") {
      setPaypal(true);
      setCredit(false);
    } else if (details.method === "credit") {
      setCredit(true);
      setPaypal(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paypal, credit]);

  return (
    <section className="px-6 bg-secondary-200">
      <Back />
      <AnimatePresence>
        {checkoutClicked && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z--20"
              onClick={() => setCheckoutClicked(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            ></motion.div>
            <div className="flex justify-center items-center">
            <ThankyouModal/>
            </div>
            
          </>
        )}
      </AnimatePresence>
      <div className="flex flex-col justify-center items-center px-6 lg:flex-row lg:items-start">
      <form className=" bg-white w-full rounded-md mb-10 p-6">
        <legend className="text-black font-manrope font-bold text-28 text-start w-full  tracking-1">
          CHECKOUT
        </legend>

        <section className="w-full flex flex-col justify-start gap-2 items-center">
          <h1 className="text-primary-100 text-13 tracking-1 w-full text-start font-bold">
            BILLING DETAILS
          </h1>
          <fieldset className="flex flex-col w-full gap-1">
            <label
              className=" w-full font-manrope text-[12px] font-bold text-black"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className=" w-full px-4 py-3 border-[1px] border-secondary-200 rounded-md text-14 font-bold"
              type="text"
              id="name"
              value={details.name}
              placeholder="John Doe"
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
            />
          </fieldset>
          <fieldset className="flex flex-col w-full gap-1">
            <label
              className=" w-full font-manrope text-[12px] font-bold text-black"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className=" w-full px-4 py-3 border-[1px] border-secondary-200 rounded-md text-14 font-bold"
              placeholder="johndoe@email.com"
              type="email"
              id="email"
              value={details.email}
              onChange={(e) => setDetails({ ...details, email: e.target.value })}
            />
          </fieldset>
          <fieldset className="flex flex-col w-full gap-1">
            <label
              className=" w-full font-manrope text-[12px] font-bold text-black"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              placeholder="+1 202-555-0136"
              className=" w-full px-4 py-3 border-[1px] border-secondary-200 rounded-md text-14 font-bold"
              type="tel"
              id="phone"
              value={details.phone}
              onChange={(e) => setDetails({ ...details, phone: e.target.value })}
            />
          </fieldset>
        </section>
        <section className="w-full flex flex-col justify-start gap-2 items-center">
          <h1 className="text-primary-100 text-13 tracking-1 w-full text-start font-bold">
            SHIPPING INFO
          </h1>
          <fieldset className="flex flex-col w-full gap-1">
            <label
              className=" w-full font-manrope text-[12px] font-bold text-black"
              htmlFor="address"
            >
              Address
            </label>
            <input
              placeholder="1137 Williams Avenue"
              className=" w-full px-4 py-3 border-[1px] border-secondary-200 rounded-md text-14 font-bold"
              type="text"
              id="address"
              value={details.address}
              onChange={(e) => setDetails({ ...details, address: e.target.value })}
            />
          </fieldset>
          <fieldset className="flex flex-col w-full gap-1">
            <label
              className=" w-full font-manrope text-[12px] font-bold text-black"
              htmlFor="zip"
            >
              ZIP Code
            </label>
            <input
              placeholder="100 01"
              className=" w-full px-4 py-3 border-[1px] border-secondary-200 rounded-md text-14 font-bold"
              type="text"
              id="zip"
              value={details.zip}
              onChange={(e) => setDetails({ ...details, zip: e.target.value })}
            />
          </fieldset>
          <fieldset className="flex flex-col w-full gap-1">
            <label
              className=" w-full font-manrope text-[12px] font-bold text-black"
              htmlFor="city"
            >
              City
            </label>
            <input
              className=" w-full px-4 py-3 border-[1px] border-secondary-200 rounded-md text-14 font-bold"
              placeholder="New York"
              type="text"
              id="city"
              value={details.city}
              onChange={(e) => setDetails({ ...details, city: e.target.value })}
            />
          </fieldset>
          <fieldset className="flex flex-col w-full gap-1">
            <label
              className=" w-full font-manrope text-[12px] font-bold text-black"
              htmlFor="country"
            >
              Country
            </label>
            <input
              placeholder="United States"
              className=" w-full px-4 py-3 border-[1px] border-secondary-200 rounded-md text-14 font-bold"
              type="text"
              id="country"
              value={details.country}
              onChange={(e) =>
                setDetails({ ...details, country: e.target.value })
              }
            />
          </fieldset>
        </section>

        <section className="w-full flex flex-col justify-start gap-2 items-center">
          <h1 className="text-primary-100 text-13 tracking-1 w-full text-start font-bold">
            PAYMENT DETAILS
          </h1>

          <fieldset className="flex flex-col w-full gap-1">
            <legend className="w-full font-manrope text-[12px] font-bold text-black">
              Payment Method
            </legend>
            <section
              className={`px-4 py-3 border-[1px] ${
                paypal ? "border-primary-100" : "border-secondary-200"
              } active:border-primary-100 selection:border-primary-100 focus:border-primary-100 rounded-md`}
            >
              <label
                className="flex items-center"
                htmlFor="paypal"
                onClick={(e) => e.stopPropagation()}
              >
                <input
                  className="mr-2 accent-primary-100"
                  type="radio"
                  id="paypal"
                  name="method"
                  value="paypal"
                  checked={details.method === "paypal"}
                  onChange={(e) => {
                    setDetails({ ...details, method: e.target.value });
                    setPaypal(true);
                  }}
                />
                <span className="font-manrope text-[12px] font-bold text-black">
                  Paypal
                </span>
              </label>
            </section>
          </fieldset>

          <fieldset className="flex flex-col w-full gap-1 pb-6">
            <section
              className={`px-4 py-3 border-[1px] ${
                credit ? "border-primary-100" : "border-secondary-200"
              } active:border-primary-100 selection:border-primary-100 focus:border-primary-100 rounded-md`}
            >
              <label
                className="flex items-center"
                htmlFor="credit"
                onClick={(e) => e.stopPropagation()}
              >
                <input
                  className="mr-2 accent-primary-100"
                  type="radio"
                  id="credit"
                  name="method"
                  value="credit"
                  checked={details.method === "credit"}
                  onChange={(e) => {
                    setDetails({ ...details, method: e.target.value });
                    setCredit(true);
                  }}
                />
                <span className="font-manrope text-[12px] font-bold text-black">
                  Credit Card
                </span>
              </label>
            </section>
          </fieldset>
        </section>
      </form>
      <Summary
      checkoutClicked={checkoutClicked}
      setCheckoutClicked={setCheckoutClicked}
      />
</div>
      
      </section>
  );
};
