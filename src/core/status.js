// ------------------
// Update Bot Status
// ------------------

module.exports = function(bot, status, channel, writable = true)
{
   const statusMap =
   {
      "online": function()
      {
         bot.setPresence({
            status: "online",
            game: {
               name: "!translate help"
            }
         });
      },

      "startTyping": function()
      {
         channel.startTyping();
      },

      "stopTyping": function()
      {
         channel.stopTyping(true);
      },

      "busy": function()
      {
         bot.setPresence({
            status: "dnd"
         });
      },

      "free": function()
      {
         bot.setPresence({
            status: "online"
         });
      }
   };

   if (status && statusMap.hasOwnProperty(status) && writable)
   {
      return statusMap[status]();
   }
};
