import { type Blog } from '@/types/blog';
import React from 'react';

// 1. CREATE CONTEXT

type State = {
  isToggle: boolean;
  posts: Blog[];
  onToggleForm: () => void;
};

export const PostContext = React.createContext<State>({
  isToggle: false,
  posts: [],
  onToggleForm: () => {},
});
