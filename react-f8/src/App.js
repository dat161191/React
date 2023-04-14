import './App.css';
import Gift from "./hook/use-state-two-way-binding/GiftRandom";
import UseState from "./hook/use-state-two-way-binding/UseState";
import {RenderProps} from "./props/ChildrenProps";
import {PropsInput} from "./form/Input";
import Props from "./props/Props";
import {FormRender} from "./form/Form";
import {TwoWayBinding, TwoWayBindingRadio, TwoWayBindingCheckBox} from "./hook/use-state-two-way-binding/TwoWayBinding";
import {TodoList} from "./hook/use-state-two-way-binding/ListTodo";
import {UseEffect} from "./hook/useEffect/UseEffectBassic";
import {UseEffectDomEvent} from "./hook/useEffect/UseEffectWithDomEvent";
import {TimerFuction} from "./hook/useEffect/UseEffectWithTimerFunctions";
import {ChatApps} from "./hook/useEffect/UseEffectChatApp";

function App() {
    return (
        <div className="App">
            <Gift/>
            <UseState/>
            <RenderProps/>
            <PropsInput/>
            <Props/>
            <FormRender/>
            <TwoWayBinding/>
            <TwoWayBindingRadio/>
            <TwoWayBindingCheckBox/>
            <TodoList/>
            <UseEffect/>
            <UseEffectDomEvent/>
            <TimerFuction/>
            <ChatApps/>
        </div>
    );
}

export default App;
