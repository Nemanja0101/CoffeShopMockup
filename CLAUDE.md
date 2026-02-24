# Project Configuration

## Agents

### ui-connectivity-checker
A specialized agent for validating that UI elements (buttons, menus, selectors) are properly connected to their underlying data objects. Use this agent when:
- Data categories are added/updated and need to be verified in corresponding UI components
- Checking if all available options in a data source are displayed in the UI
- Verifying UI elements match the data after refactoring data structures

**Example triggers:**
- "I updated the allDrinks object. Can you check if all categories show up in the menu buttons?"
- "The category filter buttons seem incomplete. Some options aren't showing."
- "I've restructured the menu data. Please verify all items are displayed."
