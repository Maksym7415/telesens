const queryCats = encodeURI(
        `p0=contentCategorySearch&p1=` +
          `{"searchParameters":` +
          `{"pagination":` +
          `{"offset":0,"pageSize":8}, "sortOrder":` +
          `[{"attribute":"OrderNo","ascending":true}]}}`
)

export { queryCats }
