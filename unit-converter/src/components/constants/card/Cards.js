import 'bootstrap/dist/css/bootstrap.min.css';
import { CardImgOverlay, Row } from 'reactstrap';
import {Col } from 'reactstrap';
import{ CardText,Card} from 'reactstrap';
import {CardTitle,CardImg} from 'reactstrap';
import {Button} from 'reactstrap';
const Cards=()=>{
    return(
        <>
    <Row>
   
    <Col sm="3">
  
    <Card inverse>
    <CardImg
      alt="Card image cap"
      src="https://media.licdn.com/dms/image/C4E05AQFfz3NRsIwqdw/videocover-high/0/1619089990307?e=2147483647&v=beta&t=36spjlM74nylMa51L9cwGEQR3yAd1xvT9bVjX7mn45c"
      style={{
        height: 270
      }}
      width="100%"
    />
    <CardImgOverlay>
      <CardTitle tag="h5">
        Length/Height
      </CardTitle>
      <CardText>
        Generally,length is defined as distance between 2 points ,it is measure in m,cm,km,mm,nm,feet,inch
      </CardText>
      <Button>
        Convert length
      </Button>
      </CardImgOverlay>
    </Card>
    </Col>
    <Col sm="3">
  
    <Card inverse>
    <CardImg
      alt="Card image cap"
      src="https://media.licdn.com/dms/image/C4E05AQFfz3NRsIwqdw/videocover-high/0/1619089990307?e=2147483647&v=beta&t=36spjlM74nylMa51L9cwGEQR3yAd1xvT9bVjX7mn45c"
      style={{
        height: 270
      }}
      width="100%"
    />
    <CardImgOverlay>
      <CardTitle tag="h5">
        Weight
      </CardTitle>
      <CardText>
        Generally,Weight is amount of quantity of heaviness where its units of measure are grams,pounds etc.
      </CardText>
      <Button>
        Convert Weight
      </Button>
      </CardImgOverlay>
    </Card>
    </Col>
    <Col sm="3">
    <Card inverse>
    <CardImg
      alt="Card image cap"
      src="https://media.licdn.com/dms/image/C4E05AQFfz3NRsIwqdw/videocover-high/0/1619089990307?e=2147483647&v=beta&t=36spjlM74nylMa51L9cwGEQR3yAd1xvT9bVjX7mn45c"
      style={{
        height: 270
      }}
      width="100%"
    />
    <CardImgOverlay>
      <CardTitle tag="h5">
        Temperature
      </CardTitle>
      <CardText>
      Temperature is a measure of average kinetic energy per molecule in a substance.its measured by celcius and fareinheit
      </CardText>
      <Button>
        Convert Temperature
      </Button>
      </CardImgOverlay>
    </Card>
    </Col>
  
    <Col sm="3">
    <Card inverse>
    <CardImg
      alt="Card image cap"
      src="https://media.licdn.com/dms/image/C4E05AQFfz3NRsIwqdw/videocover-high/0/1619089990307?e=2147483647&v=beta&t=36spjlM74nylMa51L9cwGEQR3yAd1xvT9bVjX7mn45c"
      style={{
        height: 270
      }}
      width="100%"
    />
    <CardImgOverlay>
      <CardTitle tag="h5">
        Speed
      </CardTitle>
      <CardText>
      Speed definition can be given as a measurement of the distance covered by an object with respect to the time it takes to cover that distance.it is measured in m/s or kmph.
      </CardText>
      <Button>
        Convert Speed
      </Button>
      </CardImgOverlay>
    </Card>
    </Col>
    </Row>
    <Row>
    <Col sm="3">
    <Card inverse>
    <CardImg
      alt="Card image cap"
      src="https://media.licdn.com/dms/image/C4E05AQFfz3NRsIwqdw/videocover-high/0/1619089990307?e=2147483647&v=beta&t=36spjlM74nylMa51L9cwGEQR3yAd1xvT9bVjX7mn45c"
      style={{
        height: 270
      }}
      width="100%"
    />
    <CardImgOverlay>
      <CardTitle tag="h5">
        Time
      </CardTitle>
      <CardText>
      Time is used to quantify, measure, or compare the duration of events or the intervals between them, and even, sequence events.It is measured in seconds,minutes,hours.
      </CardText>
      <Button>
        Convert Time
      </Button>
      </CardImgOverlay>
    </Card>
    </Col>
    </Row>
    
 </>
    )
}
export default Cards;