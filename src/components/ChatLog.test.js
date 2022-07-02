import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import ChatLog from './ChatLog';
import { render, screen } from '@testing-library/react';
import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';

const LOG = [
  {
    sender: 'Vladimir',
    body: 'why are you arguing with me',
    timeStamp: '2018-05-29T22:49:06+00:00',
    id: 1,
    liked: true,
  },
  {
    sender: 'Estragon',
    body: 'Because you are wrong.',
    timeStamp: '2018-05-29T22:49:33+00:00',
    id: 2,
    liked: false,
  },
  {
    sender: 'Vladimir',
    body: 'because I am what',
    timeStamp: '2018-05-29T22:50:22+00:00',
    id: 3,
    liked: true,
  },
  {
    sender: 'Estragon',
    body: 'A robot.',
    timeStamp: '2018-05-29T22:52:21+00:00',
    id: 4,
    liked: false,
  },
  {
    sender: 'Vladimir',
    body: 'Notabot',
    timeStamp: '2019-07-23T22:52:21+00:00',
    id: 5,
    liked: true,
  },
];

const testFunction = () => {
  console.log('this is a function');
};

describe('Wave 02: ChatLog', () => {
  beforeEach(() => {
    render(<ChatLog entries={LOG} onUpdateMessage={testFunction} />);
  });

  test('renders without crashing and shows all the names', () => {
    [
      {
        name: 'Vladimir',
        numChats: 3,
      },
      {
        name: 'Estragon',
        numChats: 2,
      },
    ].forEach((person) => {
      const elementList = screen.getAllByText(new RegExp(person.name));
      expect(elementList.length).toEqual(person.numChats);

      elementList.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    });
  });

  test('renders an empty list without crashing', () => {
    const element = render(
      <ChatLog entries={[]} onUpdateMessage={testFunction} />
    );
    expect(element).not.toBeNull();
  });
});
