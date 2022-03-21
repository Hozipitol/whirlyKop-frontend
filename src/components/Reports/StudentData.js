import Student from '../../images/Student.png';
import Attent from '../../images/attention.jpeg';
const StuData = [
  {
    id: "1",
    img_src: Student,
    name: "Student A",
    class: "XII",
    sec: "B",
    board: "CBSE",
    Topic: "Subject A",
    atten_per: 87,
    under_per: "89",
    atten_src:Attent,
          data:{
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
  
        label: "Drowsy level",
        data: [66, 53, 41, 84, 66, 43],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      
      {
        label: "Emotion Level",
        data: [66, 25, 48, 69, 58, 76],
        fill: false,
        borderColor: "#742774"
      }
    ]
      }
    
  },
  {
    id: "2",
    img_src:Student,
    name: "Student B",
    class: "XI",
    sec: "C",
    board: "A-LEVEL",
    Topic: "Subject B",
    atten_per: 68,
    under_per: "86",
    atten_src:Attent,
          data:{
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
  
        label: "Drowsy level",
        data: [56, 33, 41, 84, 65, 44],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      
      {
        label: "Emotion Level",
        data: [56, 33, 54, 57, 89, 99],
        fill: false,
        borderColor: "#742774"
      }
    ]
      }
  },
  {
    id: "3",
    img_src:Student,
    name: "Student C",
    class: "X",
    sec: "A",
    board: "NBSE",
    Topic: "Subject C",
    atten_per: 50,
    under_per: "47",
    atten_src:Attent,
    data:{
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
        
              label: "Drowsy level",
              data: [33, 53, 85, 41, 44, 65],
              fill: true,
              backgroundColor: "rgba(75,192,192,0.2)",
              borderColor: "rgba(75,192,192,1)"
            },
            
             {
              label: "Emotion Level",
              data: [33, 25, 35, 51, 54, 76],
              fill: false,
              borderColor: "#742774"
            }
          ]
            }
  },
];
export default StuData;