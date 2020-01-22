const queryCats = encodeURI(
        `p0=contentCategorySearch&p1=` +
          `{"searchParameters":` +
          `{"pagination":` +
          `{"offset":0,"pageSize":0}, "sortOrder":` +
          `[{"attribute":"OrderNo","ascending":true}]}}`
)

const queryContent = id => encodeURI(
        `p0=contentSearch&p1=` +
        `{"searchParameters":` +
        `{"pagination":` +
        `{"offset":0,"pageSize":10},"searchFilter":` +
        `{"and":` +
        `[{"equal":` +
        `{"name":"ContentCatId","numberValue":${id}}}]}, "sortOrder":` +
        `[{"attribute":"ContentNo","ascending":true}]}}`

)

const authorize = (passw, tel) => encodeURI(
        `p0=subscriberRetrieve&p1=` +
        `{"scope":` +
        `{"returnGiftContent":true,"returnPersonalContent":true,"returnPlayConditions":true,"returnPreservedContent":true,"returnPublicContent":true,"returnSubscriptions":true},"password":${passw},"subsIdent":${tel}}`

)

const buy = (passw, tel, id) => encodeURI(
        `p0=contentPurchase&p1=` +
        `{"password":${passw},"subsIdent":${tel}, "contentNoOrVirtContentNo":id,"serviceNoOrVirtServiceNo":1}`

)

export { queryCats, queryContent, authorize, buy }
