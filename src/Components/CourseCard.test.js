/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CourseCard } from './CourseCard';
import { useBatch } from '../Context/BatchContext';
import { useNavigate } from 'react-router-dom';

// Mocking the useNavigate and useBatch hooks
// eslint-disable-next-line no-undef
jest.mock('../Context/BatchContext');
jest.mock('react-router-dom', () => ({
  // eslint-disable-next-line no-undef
  useNavigate: jest.fn(),
}));

describe('CourseCard Component', () => {
  beforeEach(() => {
    // Mocking the setId function from useBatch hook
    useBatch.mockReturnValue({
      setId: jest.fn(),
    });

    // Mocking the navigate function from useNavigate hook
    useNavigate.mockReturnValue(jest.fn());

    // Mocking sessionStorage.setItem
    Object.defineProperty(window, 'sessionStorage', {
      value: {
        setItem: jest.fn(),
      },
      writable: true,
    });
  });

  test('renders CourseCard with correct props', () => {
    const props = {
      online: true,
      progressValue: 50,
      name: 'Test Course',
      description: 'This is a test course',
      date: '2024-04-12',
      batchId: 1,
      change: true,
    };

    render(<CourseCard {...props} />);

    expect(screen.getByText(props.name)).toBeInTheDocument();
    expect(screen.getByText(props.description)).toBeInTheDocument();
    expect(screen.getByText(props.date)).toBeInTheDocument();
  });

  test('calls batchHandler when "Batch Details" button is clicked', () => {
    const props = {
      online: true,
      progressValue: 50,
      name: 'Test Course',
      description: 'This is a test course',
      date: '2024-04-12',
      batchId: 1,
      change: true,
    };

    render(<CourseCard {...props} />);

    const batchDetailsButton = screen.getByText('Batch Details');
    fireEvent.click(batchDetailsButton);

    // Expect setId to be called with batchId
    expect(useBatch().setId).toHaveBeenCalledWith(props.batchId);

    // Expect sessionStorage.setItem to be called with batchId
    expect(window.sessionStorage.setItem).toHaveBeenCalledWith('id', props.batchId);

    // Expect navigate to be called with "/lms/batches/batchDetails"
    expect(useNavigate()).toHaveBeenCalledWith('/lms/batches/batchDetails');
  });
});
