import { useSelector } from 'react-redux';

const Rocket = () => {
  const rockets = useSelector((state) => state.rockets);
  console.log(rockets);
  // eslint-disable-next-line react/jsx-indent
  <section>
    {rockets.map((rocket) => (
      <div key={rocket.id}>
        <div>
          <img src={rocket.flickr_images} alt="123" />
        </div>
        <div>
          <h3>Rocket Name</h3>
          <p>
            <span>Reserved</span>
            Description
          </p>
          <button type="button">Reserve Rocket</button>
          <button type="button">Cancel RSVP</button>
        </div>
      </div>
    ))}
  </section>;
};
export default Rocket;
