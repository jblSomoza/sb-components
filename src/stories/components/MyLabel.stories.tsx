import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
    title : 'UI/Etiquetas/MyLabel',
    component: MyLabel,
    argTypes: {
        size: { control: 'select'},
        color: { control: 'select'},
        fontColor: { control: 'color' },
    }
} as ComponentMeta<typeof MyLabel>

const Template : ComponentStory<typeof MyLabel> = (args ) => <MyLabel { ...args }/>

export const Basic = Template.bind({});
Basic.args = {
    size:'h1',
    AllCaps: false,
    color:'primary'
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    size:'normal',
    AllCaps: true,
    color:'primary'
}

export const Secondary = Template.bind({});
Secondary.args = {
    size:'normal',
    color: 'secondary' 
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    size:'normal',
    color: 'tertiary'
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    size:'h1',
    fontColor: '#5517ac'
}

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
    size:'h1',
    fontColor: 'white',
    backgroundColor:'black'
}

