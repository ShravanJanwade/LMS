import React, { useContext, useEffect } from "react";
import { viewerContext } from "./viewerContext";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import CustomYouTubePlayer from "./CustomYoutubePlayer";
import { CompletionContext } from "./CompletionContext";
interface Props {
  // Define props interface here
}

const ResourceRenderer: React.FC<Props> = (
  {
    /* Destructure props here */
  }
) => {
  const contextValue = useContext(viewerContext);
  let view = contextValue?.view;
  let setView = contextValue?.setView;
  const { completion, setCompletion } = useContext(CompletionContext);

  const handleClick = () => {
    setCompletion({ topicId: view.id, progress: 100 })
  }
  return (
    <div>
      {view?.type === "external" ? (
        <ExternalTab />
      )
        :
        view?.type === "ppt" ? (
          <PptRenderer source={view.source} handleClick={handleClick} />
        ) : view?.type === "docx" ? (
          <DocxRenderer source={view.source} handleClick={handleClick} />
        ) : view?.type === "pdf" ? (
          <PdfRenderer />
        ) : view?.type === "sharePointVideo" ? (
          <SharePointVideoRenderer source={view.source} />
        ) : view?.type === "youtubeVideo" ? (
          <CustomYoutubeRenderer source={view.source} />
        ) : (
          <Welcome />
        )}

      {JSON.stringify(view)}
    </div>
  );
};

const Welcome: React.FC<{}> = () => {
  return (
    <h1>Wwelcome to LMS</h1>
  )
}


const CustomYoutubeRenderer: React.FC<{ source: string }> = ({ source }) => {
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
  // Extracting the video ID using match method
  const match = source.match(regex);
  // If match is found, return the video ID, otherwise return null
  const vidId = match ? match[1] : " k1BneeJTDcU";
  return (
    <Card className="mx-52 my-2  bg-gray-50 dark:bg-gray-600 h-[91vh] overflow-auto">
      <CardHeader shadow={false} floated={false} className="min-h-[120vh] mx-5 bg-gray-200 dark:bg-[#666666]">
        <div>
          <CustomYouTubePlayer vidId={vidId} />
        </div>
      </CardHeader>
      <CardBody>
        <input></input>
      </CardBody>
      <CardFooter className="pt-0"></CardFooter>
    </Card>
  );
};
const ExternalTab = () => {
  return <div>external player</div>;
};
const convertToEmbedLink = (fileLink: string): string => {
  // Extract the user-specific part of the SharePoint link
  const userPartMatch = fileLink.match(/\/personal\/([^\/]+)/);
  const userPart = userPartMatch ? userPartMatch[1] : "";

  // Extract the document ID from the SharePoint link
  const regex = /d=([^&]+)/;
  const match = fileLink.match(regex);
  const formattedDocId = match ? match[1] : null;

  // Format the document ID with hyphens
  const formattedId = formattedDocId
    ? formattedDocId
      .substring(1)
      .replace(/(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})/, "$1-$2-$3-$4-$5")
    : "";

  // Construct the embed link with the user-specific part and formatted document ID
  return `https://thisisthbs-my.sharepoint.com/personal/${userPart}/_layouts/15/Doc.aspx?sourcedoc={${formattedId}}&action=embedview&wdAr=1.7777777777777777`;
};

const IframeCustom: React.FC<{ source: string }> = ({ source }) => {
  console.log(source);
  const embedLink = convertToEmbedLink(source);
  console.log(embedLink);
  console.log(typeof embedLink);
  return (
    <iframe
      src={embedLink}
      width="906px"
      height="581px"
    // frameborder="0"
    >
     <p>view outside</p>
    </iframe>
  );
};

const PptRenderer: React.FC<{ source: string, handleClick: () => void }> = ({ source, handleClick }) => {





  return (
    <Card className="mx-52 my-2  bg-gray-50 dark:bg-gray-600 h-[91vh] overflow-auto">
      <CardHeader shadow={false} floated={false} className=" mx-5 bg-gray-200 dark:bg-[#666666] ">
        <div>
          <object
            data={source}
            type="application/pptx"
            width="906"
            height="742 "
          >
            <IframeCustom source={source} />
          </object>
        </div>
      </CardHeader>
      <CardBody>
        <Button onClick={handleClick} >Mark as Complete</Button>
      </CardBody>
      <CardFooter className="pt-0"></CardFooter>
    </Card>
  );
};

const DocxRenderer: React.FC<{ source: string, handleClick: () => void }> = ({ source, handleClick }) => {
  console.log("docx link", source)
  return (
    <Card className="mx-52 my-2  bg-gray-50 dark:bg-gray-600 h-[91vh] overflow-auto">
      <CardHeader shadow={false} floated={false} className=" mx-5 bg-gray-200 dark:bg-[#666666] ">
        <div>
          <object
            data={source}
            type="application/docx"
            width="906"
            height="742 "
          >
            <iframe
              src={source}
              width="906px"
              height="581px"
              frameborder="0"
            >
              This is an embedded{" "}
              <a target="_blank" href="https://office.com">
                Microsoft Office
              </a>{" "}
              document, powered by{" "}
              <a target="_blank" href="https://office.com/webapps">
                Office
              </a>
              .
            </iframe>
          </object>
        </div>
      </CardHeader>
      <CardBody>
        <Button onClick={handleClick}>Mark as Complete</Button>
      </CardBody>
      <CardFooter className="pt-0 mb-10">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};
const SharePointVideoRenderer: React.FC<{ source: string }> = ({ source }) => {
  return (<div>
    <Card className="mx-52 my-2  bg-gray-50 dark:bg-gray-600 h-[91vh] overflow-auto">
      <CardHeader shadow={false} floated={false} className="min-h-[78vh] mx-5 bg-gray-200 dark:bg-[#666666]">
        <div>
          <iframe
            src="https://thisisthbs-my.sharepoint.com/personal/shrivatsa_koulgi_thbs_com/_layouts/15/embed.aspx?UniqueId=b9b3471b-6ff1-479d-9c94-46385d29d30b&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"
            width="906"
            height="581"
            frameborder="0"
            scrolling="no"
            allowfullscreen
            title="Git Repo demonstration meeting-20240404_151549-Meeting Recording 1.mp4">
          </iframe>
        </div>
      </CardHeader>
      <CardBody>
        <input></input>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  </div>);
};
const PdfRenderer = () => {
  return (
    <Card className="mx-2 my-2  bg-gray-50 dark:bg-gray-600 h-[91vh] overflow-auto">
      <CardHeader
        shadow={false}
        floated={false}
        className=" mx-5 bg-gray-200 dark:bg-[#666666]"
      >
        <div>
          <object
            data="https://pdfjs-express.s3-us-west-2.amazonaws.com/docs/choosing-a-pdf-viewer.pdf"
            type="application/pdf"
            width="919"
            height="742 "
          >
            <iframe
              src="https://pdfjs-express.s3-us-west-2.amazonaws.com/docs/choosing-a-pdf-viewer.pdf"
              width="919"
              height="742"
            >
              <p>This browser does not support PDF!</p>
            </iframe>
          </object>
        </div>
      </CardHeader>
      <CardBody>
        <input></input>
      </CardBody>
      <CardFooter className="pt-0 ">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResourceRenderer;
