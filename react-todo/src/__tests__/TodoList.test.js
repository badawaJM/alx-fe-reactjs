import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

test('renders initial todo items', () => {
  render(<TodoList />);
  expect(screen.getByText(/Apprendre React/i)).toBeInTheDocument();
  expect(screen.getByText(/Construire un projet/i)).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText(/Ajouter une tâche/i), {
    target: { value: 'Nouvelle tâche' },
  });
  fireEvent.click(screen.getByText(/Ajouter/i));
  expect(screen.getByText(/Nouvelle tâche/i)).toBeInTheDocument();
});

test('toggles a todo item', () => {
  render(<TodoList />);
  const todoItem = screen.getByText(/Apprendre React/i);
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle('text-decoration: line-through');
});

test('deletes a todo item', () => {
  render(<TodoList />);
  const todoItem = screen.getByText(/Apprendre React/i);
  fireEvent.click(screen.getByText(/Supprimer/i, { selector: 'button' }));
  expect(todoItem).not.toBeInTheDocument();
});
