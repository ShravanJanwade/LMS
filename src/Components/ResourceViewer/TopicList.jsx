import { useState } from 'react';
import { BsHash } from 'react-icons/bs';
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa';
import Courses from '../../Data/Courses';
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
const topics = ['tailwind-css', 'react'];
const questions = ['jit-compilation', 'purge-files', 'dark-mode'];
const random = ['variants', 'plugins'];

const TopicList = ({ courseId }) => {
  const course = Courses.find(course => course.courseId === courseId);
  console.log(JSON.stringify(course))
  return (
    <div className='channel-bar shadow-lg'>
      {/* enter course Name here */}
      <ChannelBlock CourseName={course.courseName} />
      <div className='channel-container'>
        {course.topics.map((topic, index) => (


          <Dropdown key={index} header={topic.topicName} selections={topics} />

        ))}

      </div>
    </div>
  );
};

const Dropdown = ({ header, selections }) => {
  const [expanded, setExpanded] = useState(true);

  return (


    <Accordion open={expanded} className='dropdown'>
      <AccordionHeader onClick={() => setExpanded(!expanded)} className={expanded ? 'dropdown-header-text-selected' : 'dropdown-header-text'}>
        {header}
      </AccordionHeader>
      <AccordionBody className='dropdown-selection'>
        <p className='dropdown-selection-text'>
          {JSON.stringify(selections)}
        </p>
      </AccordionBody>
    </Accordion>

    // {/* {expanded &&
    //   selections &&
    //   selections.map((selection) => <TopicSelection selection={selection} />)} */}

  );
};

const ChevronIcon = ({ expanded }) => {
  const chevClass = 'text-accent text-opacity-80 my-auto mr-1';
  return expanded ? (
    <FaChevronDown size='14' className={chevClass} />
  ) : (
    <FaChevronRight size='14' className={chevClass} />
  );
};

const TopicSelection = ({ selection }) => (
  <div className='dropdown-selection'>
    <BsHash size='24' className='text-gray-400' />
    <h5 className='dropdown-selection-text'>{selection}</h5>
  </div>
);

const ChannelBlock = (props) => (
  <div className='channel-block'>
    <h5 className='channel-block-text'>{props.CourseName}</h5>
  </div>
);

export default TopicList;