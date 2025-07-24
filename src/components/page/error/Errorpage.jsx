import { useNavigate } from "react-router-dom";
import { Containerbox } from "../../ui/Containerbox";
import { Buttonbox } from "../../ui/Buttonbox";


const Errorpage = () => {
  const navigate = useNavigate();
  return (
    <>
      <section  className="mt-20">
        <Containerbox>
          <div className=" max-w-ful md:max-w-lg text-center mx-auto">
            <h1 className="text-6xl font-bold text-red-400 lg:text-8xl">Error 404</h1>
            <p className=" font-medium  pb-5 text-2xl py-5 text-red-300">
              The page youre looking for doesnt exist.
            </p>
            <Buttonbox className='bg-red-500 p-3 rounded-lg' onClick={() => navigate("/")}>back Home</Buttonbox>
          </div>
        </Containerbox>
      </section>
    </>
  );
};

export default Errorpage;
