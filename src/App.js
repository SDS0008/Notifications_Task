
import './App.css';




let dataobj = [
  {
    imgUrl: "https://static.vecteezy.com/system/resources/previews/010/152/436/original/tick-check-mark-icon-sign-symbol-design-free-png.png",
    msg: "informatiom message",
  },
  {
    imgUrl: "https://static.vecteezy.com/system/resources/previews/010/152/436/original/tick-check-mark-icon-sign-symbol-design-free-png.png",
    msg: "sucess message",
  },
  {
    imgUrl: "https://tse3.mm.bing.net/th?id=OIP.CdIXApf1wUJoFGWZmZ78ZAHaHa&pid=Api&P=0&h=220",
    msg: "Warning message",
  },
  {
    imgUrl: "https://tse1.mm.bing.net/th?id=OIP.xR28qga2d1i-vMrMpuAujQHaHK&pid=Api&P=0&h=220",
    msg: "Danger message",
  }
]

const App = () => {
  return (
    <section className='container'>
      <h1 className="msg-heading">
        Notifications
      </h1>

      {
        dataobj.map((eachobj) => {
          return (
            < Notification
              imgUrl={ eachobj.imgUrl }
              msg={ eachobj.msg }
            />
          )


        })
      }
    </section>
  );
}


const Notification = (props) => {

  const styles = {
    img: {
      height: "20px",
      width: "20px"
    }
  }
  return (
    <div className="msg-bg">

      <div className='Div-div'>
        <img src={ props.imgUrl } alt="" style={ styles.img } />

        <p>{ props.msg }</p>
      </div>

    </div>
  );
}




export default App;
