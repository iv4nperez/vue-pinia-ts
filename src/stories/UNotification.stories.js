import UNotification from '../components/core/UNotification/UNotification.vue';
import '../assets/tailwindcss/main.css'
import { ref } from 'vue';

export default {
  title: 'UI/UNotification',
  component: UNotification,
  argTypes: {
    positionX:{
        control: { type: 'select' },
        options: ['left', 'right'],
    },
    positionY:{
        control: { type: 'select' },
        options: ['top', 'bottom'],
    }
  },
};

const Template = (args) => ({
  components: { UNotification },
  setup() {
    const showNotification = ref(true)
    return { args, showNotification };

  },
  template: `
    <div class="h-screen">
        <UNotification v-model="showNotification" v-bind="args" />
    </div>
  `,
});


const TemplateCustom = (args) => ({
    components: { UNotification },
    setup() {
      const showNotification = ref(true)
      return { args, showNotification };
  
    },
    template: `
      <div class="h-screen">
          <UNotification v-model="showNotification" v-bind="args">
            <template v-slot:actions>
                <button>here custom buttons</button>
            </template>
          </UNotification>
      </div>
    `,
  });


export const NotificationBasic = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args

NotificationBasic.parameters = {
    docs: {
        source: {
          code: `
// to inject html content it is necessary to add the literal templates inside the props that receive the html
<u-notification
    position-x="right"
    position-y="bottom"
    title="Pause mobile <span style='color:red'>notifications</span> while you're using this device"
    content="To pause Chat mobile notifications while you’re active on this <b>device</b>, allow your browser to detect if you’re active or away. Click"
    v-model="showNotification"
>
</u-notification>
          `,
          language: "html",
          type: "code",
        },
    },
}

NotificationBasic.args = {
    positionX: 'left',
    positionY: 'top',
    title: `this is the titile with <span style='color:red'>html</span> and more content`,
    content: `this is the content but can you pass content type string or html...`
};



export const NotificationWithActions = TemplateCustom.bind({});


NotificationWithActions.parameters = {
    docs: {
        source: {
          code: `
// to inject html content it is necessary to add the literal templates inside the props that receive the html
<u-notification
    position-x="right"
    position-y="bottom"
    title="Pause mobile <span style='color:red'>notifications</span> while you're using this device"
    content="To pause Chat mobile notifications while you’re active on this <b>device</b>, allow your browser to detect if you’re active or away. Click"
    v-model="showNotification"
>

    <template v-slot:actions>
    // in this slot "actions" can you add any component for working in this section
        <button>here custom buttons</button>
    </template>

</u-notification>
          `,
          language: "html",
          type: "code",
        },
    },
}

NotificationWithActions.args = {
    positionX: 'left',
    positionY: 'top',
    title: `this is the titile with <span style='color:red'>html</span> and more content`,
    content: `this is the content but can you pass content type string or html...`
};
