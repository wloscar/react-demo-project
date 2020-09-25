export const mockProps = {
  viewConfig: {
    caption: '自定义图表-vertica_company_sales_record',
    chartTheme: 'business',
    display: { showLegend: true, startAngle: 0 },
    chartprop: { theme: 'default' },
  },
  advancedConfig: {},
  dataConfig: [
    { areaType: 'drill', fields: [] },
    {
      areaType: 'row',
      fields: [
        {
          fieldId:
            'aeb35076-1801-4620-84e4-4826bb9053c4.2f67a17d-0eb3-4dc8-8552-7fa446dea9f8.[N2f67a1_area].[N2f67a1_area].[N2f67a1_area]',
          pathId: 'aeb35076-1801-4620-84e4-4826bb9053c4.2f67a17d-0eb3-4dc8-8552-7fa446dea9f8.[N2f67a1_area]',
          uuid: '16ff525b-2c40-4537-96f5-ebfc454c8c74',
          fieldName: 'area',
          showName: 'area',
          valueType: 'location',
          fieldType: 'dimension',
          aggregation: null,
          displayType: null,
          dimGranularity: 'REGION',
          order: null,
          advancedCalculation: null,
          extends: {},
          complexFilter: { limitNum: 1000, filter: false },
        },
      ],
    },
    {
      areaType: 'column',
      fields: [
        {
          fieldId:
            'aeb35076-1801-4620-84e4-4826bb9053c4.2f67a17d-0eb3-4dc8-8552-7fa446dea9f8.[N2f67a1_order_number]|SUM||',
          pathId: 'aeb35076-1801-4620-84e4-4826bb9053c4.2f67a17d-0eb3-4dc8-8552-7fa446dea9f8.[N2f67a1_order_number]',
          uuid: '837867f2-b403-4e6d-9b16-94108afd7cc0',
          fieldName: 'order_number',
          showName: 'order_number',
          isCalc: false,
          valueType: 'number',
          fieldType: 'measure',
          aggregation: 'sum',
          order: null,
          extends: {},
          complexFilter: { limitNum: 1000, filter: false },
        },
      ],
    },
    { areaType: 'filters', fields: [] },
  ],
  data: [
    [
      {
        originValue: '东北',
        value: '东北',
        fieldId:
          'aeb35076-1801-4620-84e4-4826bb9053c4.2f67a17d-0eb3-4dc8-8552-7fa446dea9f8.[N2f67a1_area].[N2f67a1_area].[N2f67a1_area]',
        geoInfo: { country: 'China', region: '东北' },
      },
      {
        originValue: '45787.0',
        value: '45787.0',
        fieldId:
          'aeb35076-1801-4620-84e4-4826bb9053c4.2f67a17d-0eb3-4dc8-8552-7fa446dea9f8.[N2f67a1_order_number]|SUM||',
        geoInfo: false,
      },
    ],
    [
      {
        originValue: '华东',
        value: '华东',
        fieldId:
          'aeb35076-1801-4620-84e4-4826bb9053c4.2f67a17d-0eb3-4dc8-8552-7fa446dea9f8.[N2f67a1_area].[N2f67a1_area].[N2f67a1_area]',
        geoInfo: { country: 'China', region: '华东' },
      },
      {
        originValue: '49534.0',
        value: '49534.0',
        fieldId:
          'aeb35076-1801-4620-84e4-4826bb9053c4.2f67a17d-0eb3-4dc8-8552-7fa446dea9f8.[N2f67a1_order_number]|SUM||',
        geoInfo: false,
      },
    ],
    [
      {
        originValue: '华中',
        value: '华中',
        fieldId:
          'aeb35076-1801-4620-84e4-4826bb9053c4.2f67a17d-0eb3-4dc8-8552-7fa446dea9f8.[N2f67a1_area].[N2f67a1_area].[N2f67a1_area]',
        geoInfo: { country: 'China', region: '华中' },
      },
      {
        originValue: '23694.0',
        value: '23694.0',
        fieldId:
          'aeb35076-1801-4620-84e4-4826bb9053c4.2f67a17d-0eb3-4dc8-8552-7fa446dea9f8.[N2f67a1_order_number]|SUM||',
        geoInfo: false,
      },
    ],
    [
      {
        originValue: '华北',
        value: '华北',
        fieldId:
          'aeb35076-1801-4620-84e4-4826bb9053c4.2f67a17d-0eb3-4dc8-8552-7fa446dea9f8.[N2f67a1_area].[N2f67a1_area].[N2f67a1_area]',
        geoInfo: { country: 'China', region: '华北' },
      },
      {
        originValue: '58672.0',
        value: '58672.0',
        fieldId:
          'aeb35076-1801-4620-84e4-4826bb9053c4.2f67a17d-0eb3-4dc8-8552-7fa446dea9f8.[N2f67a1_order_number]|SUM||',
        geoInfo: false,
      },
    ],
    [
      {
        originValue: '华南',
        value: '华南',
        fieldId:
          'aeb35076-1801-4620-84e4-4826bb9053c4.2f67a17d-0eb3-4dc8-8552-7fa446dea9f8.[N2f67a1_area].[N2f67a1_area].[N2f67a1_area]',
        geoInfo: { country: 'China', region: '华南' },
      },
      {
        originValue: '83938.0',
        value: '83938.0',
        fieldId:
          'aeb35076-1801-4620-84e4-4826bb9053c4.2f67a17d-0eb3-4dc8-8552-7fa446dea9f8.[N2f67a1_order_number]|SUM||',
        geoInfo: false,
      },
    ],
    [
      {
        originValue: '西北',
        value: '西北',
        fieldId:
          'aeb35076-1801-4620-84e4-4826bb9053c4.2f67a17d-0eb3-4dc8-8552-7fa446dea9f8.[N2f67a1_area].[N2f67a1_area].[N2f67a1_area]',
        geoInfo: { country: 'China', region: '西北' },
      },
      {
        originValue: '21834.0',
        value: '21834.0',
        fieldId:
          'aeb35076-1801-4620-84e4-4826bb9053c4.2f67a17d-0eb3-4dc8-8552-7fa446dea9f8.[N2f67a1_order_number]|SUM||',
        geoInfo: false,
      },
    ],
    [
      {
        originValue: '西南',
        value: '西南',
        fieldId:
          'aeb35076-1801-4620-84e4-4826bb9053c4.2f67a17d-0eb3-4dc8-8552-7fa446dea9f8.[N2f67a1_area].[N2f67a1_area].[N2f67a1_area]',
        geoInfo: { country: 'China', region: '西南' },
      },
      {
        originValue: '8337.0',
        value: '8337.0',
        fieldId:
          'aeb35076-1801-4620-84e4-4826bb9053c4.2f67a17d-0eb3-4dc8-8552-7fa446dea9f8.[N2f67a1_order_number]|SUM||',
        geoInfo: false,
      },
    ],
  ],
  globalConfig: {
    renderMode: 'edit',
    env: ['pc'],
    setting: {
      permitDown: true,
      version: '2.0.2',
      watermark: true,
      isNewLayout: true,
      chartsTheme: 'business',
      dashboardTheme: 'default',
      themeId: 'default',
    },
  },
} as any;
