   // src/components/Video.js
   import React from 'react';
   import DateTime from './DateTime';
   import withFormattedDate from './DateTimePretty';

   const DateTimeWithPretty = withFormattedDate(DateTime);

   function Video(props) {
     return (
       <div className="video">
         <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
         <DateTimeWithPretty date={props.date} />
       </div>
     );
   }

   export default Video;