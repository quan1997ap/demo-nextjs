import NavComponent from "../../component/nav/nav.component";
const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://test.mosquitto.org')


export default class MqttPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    client.on('connect', function () {
      client.subscribe('presence', function (err) {
        if (!err) {
          client.publish('presence', 'Hello mqtt')
        }
      })
    })
  }

  render() {
    return (
     <>
        <NavComponent />
        <p>Hello, I'm the mqtt page</p>
        <img src="/logo.png" alt="my image"  width="100" height="100"  />
        <img src="/imgs/logo.jpg" alt="my image"  width="100" height="100"  />
     </>
    )
  }
}
