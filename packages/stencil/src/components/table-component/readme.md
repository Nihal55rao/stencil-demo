# table-component



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute     | Description | Type      | Default |
| -------------- | ------------- | ----------- | --------- | ------- |
| `apiFeature`   | `api-feature` |             | `boolean` | `false` |
| `employerData` | --            |             | `any[]`   | `[]`    |


## Dependencies

### Used by

 - [employer-form-component](../employer-form-component)
 - [employer-table](../employer-table)

### Depends on

- [employee-dialog](../employee-dialog)

### Graph
```mermaid
graph TD;
  table-component --> employee-dialog
  employer-form-component --> table-component
  employer-table --> table-component
  style table-component fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
