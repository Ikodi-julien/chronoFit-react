const fakeTrainings = [
  {
    date: new Date().toLocaleString(),
    name: "test",
    duration: 6,
    timecap: 0,
    exos: [
      {
        name: "exo 1",
        description: "desc de l''exo 1",
        duration: 1.9,
        reps: 2,
        weight: 2,
      },
      {
        name: "exo 2",
        description: "desc de l''exo 2",
        duration: 1.9,
        reps: 3,
        weight: 0,
      },
      {
        name: "exo 2",
        description: "desc de l''exo 3",
        duration: 1.9,
        reps: 3,
        weight: 0,
      },
    ],
  },
  {
    date: new Date().toLocaleString(),
    name: "test2",
    duration: 6,
    timecap: 0,
    exos: [
      {
        name: "exo 11",
        description: "desc de l''exo 11",
        duration: 1.9,
        reps: 2,
        weight: 2,
      },
      {
        name: "exo 21",
        description: "desc de l''exo 21",
        duration: 1.9,
        reps: 3,
        weight: 0,
      },
      {
        name: "exo 21",
        description: "desc de l''exo 31",
        duration: 1.9,
        reps: 3,
        weight: 0,
      },
    ],
  },
];

export default fakeTrainings;
