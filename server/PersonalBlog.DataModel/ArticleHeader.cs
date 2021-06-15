using System;
using System.Collections.Generic;

namespace PersonalBlog.DataModel
{
    public class ArticleHeader
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int ArticleId { get; set; }
        public DateTime Created { get; set; }
        public ICollection<int> KeywordIds { get; set; }
    }
}
