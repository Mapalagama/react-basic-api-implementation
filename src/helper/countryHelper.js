export const getNativeName = (Obj, attribute) => {
  if (Obj.hasOwnProperty(attribute)) {
    return Obj[attribute][Object.keys(Obj[attribute])[0]].official;
  }
  return "";
};

export const getLanguage = (obj, attribute, isOnSingleView = false) => {
  if (obj.hasOwnProperty(attribute)) {
    return Object.keys(obj[attribute]).map((element, index) => {
      if (isOnSingleView) {
        return (
          <tr key={index} className="table-row">
            <th>{element}</th>
            <td className="table-coloum">{obj[attribute][element]}</td>
          </tr>
        );
      } else {
        return <p key={index}>{obj[attribute][element]}</p>;
      }
    });
  }
  return "";
};
