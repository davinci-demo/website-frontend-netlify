import type { StoryObj, Meta } from '@storybook/react';
import mockCourseInfo from "../../stories/mocks/mockCourseInfo.js";

import CourseModal from './CourseModal';
//import { CourseModalProps } from './CourseModal';

const meta: Meta<typeof CourseModal> = {
  component: CourseModal,
  title: 'Modals/CourseModal',
  tags: ['autodocs'],
  args: {
    closeModal: true,
    courseInfo: mockCourseInfo
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        
    }
};

export const withoutTitles: Story = {
    ...Default,
    args: {
        ...Default.args,
        courseInfo: {
            ...mockCourseInfo,
            title:null
        }
    }
}