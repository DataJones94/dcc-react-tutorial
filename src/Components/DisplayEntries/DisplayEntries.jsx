
const DisplayEntries = (props) => {
    return ( 
        <table className="table">
        <thead>
          <tr>
            <th>Entry Number</th>
            <th>Weight</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {props.parentEntries.map((entry, index)=> {
            return (
              <tr key={index}> {/* if you swap this out for date that will give us the date = bonus question */}
                <td>{index + 1}</td>
                <td>{entry.weight}</td>
                <td>{entry.date}</td>
              </tr>
            )
          })}
    
        </tbody>
      </table>
     );
}
 
export default DisplayEntries;