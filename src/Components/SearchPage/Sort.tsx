import React, {FunctionComponent, useEffect} from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import {
  buildSort,
  buildRelevanceSortCriterion,
  buildCriterionExpression,
  buildDateSortCriterion,
  SortOrder,
  Sort as HeadlessSort,
  SortCriterion,
} from '@coveo/headless';
import {InputLabel, MenuItem, Select} from '@mui/material';
import EngineContext from '../../common/engineContext';

export interface SortProps {
  controller: HeadlessSort;
  criteria: [string, SortCriterion][];
}

const SortRenderer: FunctionComponent<SortProps> = (props) => {
  const {controller, criteria} = props;
  const [state, setState] = React.useState(controller.state);

  useEffect(
    () => controller.subscribe(() => setState(controller.state)),
    [controller]
  );

  const getCurrentCriterion = () =>
    criteria.find(
      ([, criterion]) =>
        state.sortCriteria === buildCriterionExpression(criterion)
    )!;

  const getCriterionFromName = (name: string) =>
    criteria.find(([criterionName]) => criterionName === name)!;

  return (
    <Box>
      <FormControl>
        <InputLabel id="sort-by-label">Sortuj według</InputLabel>
        <Select
          labelId="sort-by-label"
          label="Sortuj według"
          id="sort-by"
          onChange={(e) =>
            controller.sortBy(getCriterionFromName(e.target.value as string)[1])
          }
          defaultValue={getCurrentCriterion()[0]}
        >
          {criteria.map(([criterionName]) => (
            <MenuItem key={criterionName} value={criterionName}>
              {criterionName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

const Sort = () => {
  const engine = React.useContext(EngineContext)!;

  const criteria: [string, SortCriterion][] = [
    ['Trafność', buildRelevanceSortCriterion()],
    ['data (od najstarszej)', buildDateSortCriterion(SortOrder.Ascending)],
    ['data (od najnowszej)', buildDateSortCriterion(SortOrder.Descending)],
  ];
  const initialCriterion = criteria[0][1];
  const controller = buildSort(engine, {
    initialState: {criterion: initialCriterion},
  });

  return <SortRenderer controller={controller} criteria={criteria} />;
};
export default Sort;
