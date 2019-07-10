module.exports = function(config) {
    config.addPassthroughCopy("./static");

    config.addCollection("tagList", function(collection){
        let tagSet = new Set();
          collection.getAll().forEach(function(item) {
            if( "tags" in item.data ) {
              let tags = item.data.tags;

              tags = tags.filter(function(item) {
                switch(item) {
                  // this list should match the `filter` list in tags.njk
                  case "all":
                  case "nav":
                  case "post":
                  case "posts":
                    return false;
                }

                return true;
              });

              for (const tag of tags) {
                tagSet.add(tag);
              }
            }
          });
          // returning an array in addCollection works in Eleventy 0.5.3
        return [...tagSet];
    });

    config.addCollection("videos", function(collection) {
        // get unsorted items
        let videos = collection.getAll().filter((col)=>col.data.layout == "video");
        let sorted = videos.sort(function(a,b){
            return new Date(b.date) - new Date(a.date);
        });
        // console.log(videos);
        return sorted;
    });

    // eleventyConfig.addShortcode("getAllTags", function(all) {
    //     console.log(all);
    //     return [];
    // });
}
