import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';
import MemberForm from '../components/MemberForm';
import Members from '../components/Members';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('>>> Member Form --- Shallow Render <<<', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('Render the DUMB component', () => {
    expect(wrapper.length).toEqual(1)
  });

});

it('includes Members', () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<Members />)).toEqual(true)
});

it('includes MemberForm', () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<MemberForm />)).toEqual(true)
});

