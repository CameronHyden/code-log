import "./Clock.scss";

const Clock = ({ secondHand, minuteHand, hourHand }) => {
  return (
    <div className="clock">
      <div
        className="clock__hourHand"
        style={{
          transform: `translate(-50%) rotate(${hourHand * 360}deg)`,
        }}
      ></div>
      <div
        className="clock__minuteHand"
        style={{
          transform: `translate(-50%) rotate(${minuteHand * 360}deg)`,
        }}
      ></div>
      <div
        className="clock__secondHand"
        style={{
          transform: `translate(-50%) rotate(${secondHand * 360}deg)`,
        }}
      ></div>

      <div className="number number1">
        <div>1</div>
      </div>
      <div className="number number2">
        <div>2</div>
      </div>
      <div className="number number3">
        <div>3</div>
      </div>
      <div className="number number4">
        <div>4</div>
      </div>
      <div className="number number5">
        <div>5</div>
      </div>
      <div className="number number6">
        <div>6</div>
      </div>
      <div className="number number7">
        <div>7</div>
      </div>
      <div className="number number8">
        <div>8</div>
      </div>
      <div className="number number9">
        <div>9</div>
      </div>
      <div className="number number10">
        <div>10</div>
      </div>
      <div className="number number11">
        <div>11</div>
      </div>
      <div className="number number12">
        <div>12</div>
      </div>
    </div>
  );
};

export default Clock;
