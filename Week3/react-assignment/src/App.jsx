import React from "react";
import TextUpdater from "./components/textUpdater";
import Form from "./components/Form";
import Card from "./components/Card";
import ButtonCompo from "./components/ButtonCompo";
import LoginForm from "./components/LoginForm";

const App = () => {
  return <div className="">
    <h1 className="bg-red-500 rounded p-2 text-xl w-fit m-5">Ques No 1</h1>
    <TextUpdater></TextUpdater>

    <h1 className="bg-red-500 rounded p-2 text-xl w-fit m-5">Ques No 2</h1>
    <Form></Form>

    <h1 className="bg-red-500 rounded p-2 text-xl w-fit m-5">Ques No 3</h1>
    <div className='w-[90%] mx-auto mt-10 items-center flex'>
      <Card name='Mahi' mail='mahigupta@gmail.com' img='https://i.pinimg.com/236x/2a/e6/76/2ae676b0b34e80507a7871f8985dc1d2.jpg'></Card>
      <Card name='Rohan' mail='rohanverma@gmail.com' img='https://media.wired.com/photos/64f9d24e1b27a741aa23c0dd/master/pass/Studio-Ghibli-Ranked-Culture-HERON_img_1.jpg'></Card>
    </div>

    <h1 className="bg-red-500 rounded p-2 text-xl w-fit m-5">Ques No 4</h1>
    <ButtonCompo></ButtonCompo>

    <h1 className="bg-red-500 rounded p-2 text-xl w-fit m-5">Ques No 5</h1>
    <LoginForm></LoginForm>
  </div>;


};

export default App;
