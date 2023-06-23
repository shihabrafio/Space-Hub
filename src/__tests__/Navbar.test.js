import Navbar from '../components/Navbar';

describe('Navbar', () => {
  it('render Navbar Components', () => {
    expect(Navbar).toMatchSnapshot();
  });
});
