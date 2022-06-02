<template>
  <q-page class="q-pa-lg">
    <h6 class="q-mt-none text-center">Staff Departments</h6>
    <q-list bordered class="rounded-borders" style="border-radius: 20px">
      <q-expansion-item
        v-for="dept in depts"
        :key="dept.id"
        expand-separator
        :label="dept.label"
      >
        <q-card>
          <q-card-section>
            {{ dept.section }}
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>

    <h6 class="text-center">Non-Teaching-Staff Departments</h6>
    <q-list bordered class="rounded-borders" style="border-radius: 20px">
      <q-expansion-item
        v-for="ndept in nonStaffDept"
        :key="ndept.id"
        expand-separator
        :label="ndept.label"
      >
        <q-card>
          <q-card-section>
            {{ ndept.section }}
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: "schooldept",
  data: () => ({
    depts: [
      {
        label: "Computer Science",
        section:
          "Computer science (sometimes called computation science) is the study of processes that interact with data and that can be represented as data in the form of programs. It enables the use of algorithms to manipulate, store, and communicate digital information."
      },
      {
        label: "Financial Accounting",
        section:
          "Financial accounting (or financial accountancy) is the field of accounting concerned with the summary, analysis and reporting of financial transactions related to a business. This involves the preparation of financial statements available for public use. "
      },
      {
        label: "Information Technology",
        section:
          "Information technology (IT) is the use of computers to store, retrieve, transmit, and manipulate data[1] or information. IT is typically used within the context of business operations as opposed to personal or entertainment technologies."
      },
      {
        label: "International Foundations Program",
        section:
          "The International Foundation Programme allows you to progress to over 300 degree programmes at the University of Kent. Depending on which degree programme you would like to progress to, this will inform which IFP course you study."
      },
      {
        label: "Information Technology and Business Information System",
        section:
          "Information systems (IS) are formal, sociotechnical, organizational systems designed to collect, process, store, and distribute information. In a sociotechnical perspective, information systems are composed by four components: task, people, structure (or roles), and technology."
      },
      {
        label: "Law",
        section:
          "Law is commonly understood as a system of rules that are created and enforced through social or governmental institutions to regulate conduct, although its precise definition is a matter of longstanding debate. It has been variously described as a science and the art of justice."
      }
    ],
    nonStaffDept: [
      {
        label: "Library",
        section:
          "A library is a curated collection of sources of information and similar resources, selected by experts and made accessible to a defined community for reference or borrowing. It provides physical or digital access to material, and may be a physical location or a virtual space, or both."
      },

      {
        label: "Finance Office",
        section:
          "Finance is the study of money and how it is used. Specifically, it deals with the questions of how an individual, company or government acquires the money needed - called capital in the company context - and how they then spend or invest that money."
      },

      {
        label: "Student Office",
        section:
          "A student is primarily a person enrolled in a school or other educational institution who attends classes in a course to attain the appropriate level of mastery of a subject under the guidance of an instructor and who devotes time outside class to do whatever activities the instructor assigns that are necessary either for class preparation or to submit evidence of progress towards that mastery."
      },

      {
        label: "International Relation",
        section:
          "International relations (IR) or international affairs (IA) — commonly also referred to as international studies (IS), global studies (GS), or global affairs (GA) — is the study in interconnectedness of politics, economics and law on a global level."
      },

      {
        label: "Canteen",
        section:
          "Canteen is a type of food service location within an institution in which there is little or no waiting staff table service"
      },

      {
        label: "Reception",
        section:
          "Reception, a formal party, usually in the evening, where the guests are 'received' (welcomed) by the hosts and guests of honor"
      },
      {
        label: "Others",
        section:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex numquam,dolorum officiis modi facere maiores architecto suscipit iste eveniet doloribus ullam aliquid."
      }
    ]
  })
};
</script>

<style>
</style>