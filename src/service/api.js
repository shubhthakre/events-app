const events = [
  {
    title: 'Sustainable Development Impact Summit',
    slug: 'sustainable-development-impact-summit-2020',
    date: '21—24 September 2020',
    description1:
      'The COVID-19 crisis wreaked havoc on societies and economies and dealt a major setback to achieving the 2030 Agenda and the Paris Climate Agreement. Putting the world back on a path of sustainable, equitable, and inclusive growth will require more than a global recovery; it will require a Great Reset of social and economic systems.',
    description2:
      'Taking place in the context of the United Nations General Assembly, the World Economic Forum’s fourth and, for the first time, fully virtual Sustainable Development Impact Summit will convene leaders from government, business, international organizations and civil society along with a diverse group of experts and innovators to initiate, accelerate and scale-up entrepreneurial solutions to tackle climate change and advance sustainable development.',
  },
];

export function getEvents() {
  return events;
}

export function getEventBySlug(slug) {
  const indexOfSlug = events.findIndex(event => event.slug === slug);
  return events[indexOfSlug];
}
