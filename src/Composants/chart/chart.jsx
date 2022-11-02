import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function PieChart(props) {
  function CalculRest ()
  {
    return Number(props.money - (props.food + props.clothes + props.transport))
  }
  const data = {
    labels: ["Food", "Clothes", "Transport"],
    datasets: [
      {
        label: "# of Votes",
        data: [props.food,props.clothes,props.transport],
        backgroundColor: [
          "#808080",
          "#008000",
          "#FF0000",
          
        ],
        borderColor: [
          "#000000",
          "#000000",
          "#000000",
          
        ],
        borderWidth: 1,
      },
    ],
  };
  return (

     <div style={{ width: 300, textAlign: "center",marginLeft:200 }}>
      
       <Pie data={data} width={50} height={50} />
    
      
      
     </div>
  );
}