import { useState } from 'react';
import { BsHash } from 'react-icons/bs';
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa';
import Courses from '../../Data/Courses';
import { Card, Accordion, AccordionHeader, AccordionBody, Typography } from '@material-tailwind/react';
import useDarkMode from './useDarkMode';
const topics = ['tailwind-css', 'react'];
const questions = ['jit-compilation', 'purge-files', 'dark-mode'];
const random = ['variants', 'plugins'];

const TopicList = ({ courseId }) => {
  const course = Courses.find(course => course.courseId === courseId);
  console.log(JSON.stringify(course))
  const [darkTheme, setDarkTheme] = useDarkMode();
  return (
    <div className='channel-bar shadow-lg w-[800px] '>
      {/* enter course Name here */}
      <ChannelBlock CourseName={course.courseName} />
      <div className='channel-container '>
      <Card className=' overflow-auto min-h-[800px] max-h-screen bg-[#D5D5D5] dark:bg-[#646464]'>
        
        {course.topics.map((topic, index) => (
          <Dropdown key={index} header={topic.topicName} selections={topics} />
        ))}
       
        </Card>
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
        <p>
          <ResourceBlock resources={selections} />
          {JSON.stringify(selections)}
        </p>
      </AccordionBody>
    </Accordion>
    

    // {/* {expanded &&
    //   selections &&
    //   selections.map((selection) => <TopicSelection selection={selection} />)} */}

  );
};


const ResourceBlock = (props) => {
  const TABLE_HEAD = ["Name", "Type", "Status"];
  return (
    <Card className="h-full w-[450px] m-1" >
      <table className="w-full min-w-max table-auto text-left">
        <thead>
         
        </thead>
        <tbody>
          {props.resources.map((data, index) => {
            
            const classes = "p-4 border-b border-blue-gray-50";

            return (
              <tr key={index} className='dropdown-selection-text'>
                <a href='http://www.google.com'>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {data}
                    </Typography>
                  </td>
                </a>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {data}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {data}
                  </Typography>
                </td>

              </tr>
            );
          })}
        </tbody>
      </table>
    </Card >
  )
}

const ChannelBlock = (props) => (
  <div className='channel-block'>
    <h5 className='channel-block-text'>{props.CourseName}</h5>
  </div>
);

export default TopicList;