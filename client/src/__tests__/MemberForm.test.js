import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MemberFormConected, { MemberForm } from '../components/MemberForm';

Enzyme.configure({ adapter: new Adapter() });

describe('>>> Member Form --- Shallow Render <<<', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MemberForm />)
  })
  

  it('Render the DUMB component', () => {
    expect(wrapper.length).toEqual(1)
  });

  it('Contains First Name', () => {
    expect(wrapper.contains(<label>First Name: </label>)).toBe(true)
  });

  it('Contains Last name', () => {
    expect(wrapper.contains(<label>Last name: </label>)).toBe(true)
  });

  it('Contains Email', () => {
    expect(wrapper.contains(<label>Email: </label>)).toBe(true)
  });

  it('Contains Event date', () => {
    expect(wrapper.contains(<label>Event date: </label>)).toBe(true)
  });

  it('Contains button with id="submit"', () => {
    expect(wrapper.find('button#submit').type()).toEqual('button')
  });
});

describe('>>> MemberFormConected --- React-Redux (Shallow + passing the mock {store} ) <<<', () => {
  const initialState = {}
  const mockStore = configureStore()
  let store, container

  beforeEach(() => {
    store = mockStore(initialState)
    container = shallow(<MemberFormConected store={store} />)
  })

  it('Render the connected(SMART) component', () => {
    expect(container.length).toEqual(1)
  });
});

describe('>>> MemberFormConected --- REACT-REDUX (Mount + wrapping in <Provider> <<<)', () => {
  const initialState = { output: 10 }
  const mockStore = configureStore()
  let store, wrapper

  beforeEach(() => {
    store = mockStore(initialState)
    wrapper = mount(<Provider store={store}><MemberFormConected /></Provider>)
  })


  it('Contains First Name', () => {
    expect(wrapper.contains(<label>First Name: </label>)).toBe(true)
  });

  it('+++ render the connected(SMART) component', () => {
    expect(wrapper.find(MemberFormConected).length).toEqual(1)
  });
});
