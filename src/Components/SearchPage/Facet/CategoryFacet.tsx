import {
  CategoryFacet as HeadlessCategoryFacet,
  CategoryFacetValue,
  FacetValue,
} from '@coveo/headless';
import { Box, Divider, List, ListItem, ListItemText, Typography, Button } from '@mui/material';
import { useEffect, useState, FunctionComponent } from 'react';
import styled from "styled-components";
import './Facet.css';
import Icon from 'react-icons-kit';
import { cornerDownRight } from 'react-icons-kit/feather'



interface CategoryFacetProps {
  controller: HeadlessCategoryFacet;
}

export const CategoryFacet: FunctionComponent<CategoryFacetProps> = (props) => {
  const { controller } = props;
  const [state, setState] = useState(controller.state);

  useEffect(() => controller.subscribe(() => setState(controller.state)), []);

  function getUniqueKeyForValue(value: CategoryFacetValue) {
    return value.path.join('>');
  }

  function renderClearButton() {
    return (
      <Button size='medium' sx={{ margin: "4px 2px", color: "#ae0000" }} onClick={() => controller.deselectAll()}>All categories</Button>
    );
  }

  function renderParents() {
    //Adds indentations to each level (units in px)
    const indentConstant = 30;

    return (
      state.hasActiveValues && (
        <Box pb={1}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}>
          {renderClearButton()}

          {state.parents.map((parentValue, i) => {
            const isSelectedValue = i === state.parents.length - 1;
            return (
              <Box key={getUniqueKeyForValue(parentValue)}>
                {!isSelectedValue ? (     
                    <AncestorValue style={{ marginLeft: `${indentConstant * i}px` }} onClick={() => controller.toggleSelect(parentValue)}>
                      <Icon icon={cornerDownRight} /> &nbsp;
                      {parentValue.value}
                    </AncestorValue>
                    ) : (
                    <ParentValue style={{ marginLeft: `${indentConstant * i}px`, fontWeight: "bold" }}>{parentValue.value}</ParentValue>
                )}
              </Box>
            );
          })}
        </Box>
      )
    );
  }

  function renderActiveValues() {
    return (

      <List dense >
        {
          state.values.map((value) => {
            return (
              <ListItem
                style={{ padding: "0" }}
                key={getUniqueKeyForValue(value)}
                role={undefined}
                onClick={() => controller.toggleSelect(value)}
                sx={{ transition: "all 100ms ease", "&:hover": { cursor: "pointer", backgroundColor: "#eeeeee" } }}>
                <ListItemText
                  className="truncate inline"
                  primary={`${value.value}`}
                  secondary={`(${value.numberOfResults})`}
                />
              </ListItem>
            );
          })
        }
      </List >
    )
  }

  function renderCanShowMoreLess() {
    return (
      <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        {state.canShowLessValues && (
          <Button size='small' sx={{ color: "#ae0000" }} onClick={() => controller.showLessValues()}>pokaż mniej</Button>
        )}
        {state.canShowMoreValues && (
          <Button size='small' sx={{ color: "#ae0000" }} onClick={() => controller.showMoreValues()}>pokaż więcej</Button>
        )}
      </div>
    );
  }

  function renderTitle() {
    return (
      <>
        <Box
          pb={1}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" component="h6" sx={{ color: "black" }}>
          kategorie
          </Typography>
        </Box>
        <Divider />
      </>
    )
  }

  if (!state.hasActiveValues && state.values.length === 0) {
    return null;
  }

  return (
    <Wrapper>
      <Box mb={0} mr={3} p={1}>
        {renderTitle()}
        {renderParents()}
        {renderActiveValues()}
        {renderCanShowMoreLess()}
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 2px #e5e8e8 solid;
  max-width: 300px;
  padding: 24px 0 24px 20px;
  margin-bottom: 20px;
  font-family: inherit;
  box-shadow: 5px 5px 0 #cccccc;
`;

const ParentValue = styled.p`
  font-size: 16px;
  padding: 4px 2px;
`;

const AncestorValue = styled.button`
  font-size: 16px;
  cursor: pointer;
  border: none;
  background: none;
  padding: 4px;
  border-radius: 2px;
  margin-bottom: 2px;
  transition: all 300ms ease;
  &:hover {
    background-color: #eeeeee
  }
`;