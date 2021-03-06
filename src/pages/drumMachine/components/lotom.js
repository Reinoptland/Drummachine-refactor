import React from "react";

function LoTom({ composition, onCompositionChange }) {
  const updateComposition = (id) => {
    const newComposition = [...composition];
    newComposition[id] = newComposition[id] === 1 ? 0 : 1;

    onCompositionChange("lotom", newComposition);
  };

  return (
    <div>
      <div className="lotom">
        <ul>
          <label className="customCheckbox">
            LoTom{" "}
            {[...Array(16)].map((_, i) => {
              return (
                <input
                  className="check"
                  key={`lotom${i}`}
                  type="checkbox"
                  checked={composition[i]}
                  onChange={() => updateComposition(i)}
                />
              );
            })}
          </label>
        </ul>
      </div>
    </div>
  );
}

export default LoTom;
