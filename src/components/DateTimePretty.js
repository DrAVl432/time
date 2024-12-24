   // src/components/DateTimePretty.js
   import React from 'react';
   import moment from 'moment';

   const withFormattedDate = (Component) => {
     return function WrappedComponent(props) {
       const now = moment();
       const publishedDate = moment(props.date);
       const diffMinutes = now.diff(publishedDate, 'minutes');
       const diffHours = now.diff(publishedDate, 'hours');

       let formattedDate;
       if (diffMinutes < 60) {
         formattedDate = `${diffMinutes} минут назад`;
       } else if (diffHours < 24) {
         formattedDate = `${diffHours} часов назад`;
       } else {
         const diffDays = now.diff(publishedDate, 'days');
         formattedDate = `${diffDays} дней назад`;
       }

       return <Component {...props} date={formattedDate} />;
     };
   };

   export default withFormattedDate;