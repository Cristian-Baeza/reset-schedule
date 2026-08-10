const personColors = {
  Cristian: "#800080", // blue
  Hazel: "#2563EB",    // red
  Ric: "#16A34A",      // green
};


export default function Home() {
  const weekOfMonth = "AUG 10"

  const schedule = [
    {
      day: "Monday",
      assignments: [
        { location: "Morning Reset", person: "Cristian" },
        { location: "Reset", person: "Ric" },
      ],
    },
    {
      day: "Tuesday",
      assignments: [
        { location: "Reset", person: "Hazel" },
      ],
    },
    {
      day: "Wednesday",
      assignments: [
        { location: "Morning Reset", person: "Cristian" },
        { location: "Reset", person: "Hazel" },
        { location: "School", person: "Ric" },
      ],
    },
    {
      day: "Thursday",
      assignments: [
        { location: "Reset", person: "Ric" }, // Not Hazel
      ],
    },{
      day: "Friday",
      assignments: [
        { location: "Morning Reset", person: "Cristian" },
        { location: "Reset", person: "Hazel" },
      ],
    },{
      day: "Saturday",
      assignments: [
        { location: "Park", person: "Ric" },
        { location: "Reset", person: "Hazel" },
      ],
    },{
      day: "Sunday",
      assignments: [
        { location: "Park", person: "Ric" },
        { location: "Reset", person: "Hazel" },
        { location: "School", person: "Cristian" },
      ],
    },
  ];

  return (
    <main className="min-h-screen p-8" style={{ backgroundColor: "#FDF8F5" }}>
      <div className="mx-auto max-w-xl rounded-lg bg-white p-6 shadow-lg">
        <h1 className="mb-8 text-3xl font-bold" style={{ color: "#CA4A1C" }} >
          Schedule Week { weekOfMonth }
        </h1>

        <div className="space-y-8">
          {schedule.map((day) => (
            <section
              key={day.day}
              className="border-l-4 pl-4"
              style={{ borderColor: "#CA4A1C" }}
            >
              <h2
                className="mb-2 text-xl font-semibold"
                style={{ color: "#131D2D" }}
              >
                {day.day}
              </h2>

              {day.assignments.length === 0 ? (
                <p className="text-gray-500">No assignments</p>
              ) : (
                <ul className="space-y-1">
                  {day.assignments.map((assignment, index) => (
                    <li key={index}>
                      <span
                        className="font-semibold"
                        style={{ color: "#CA4A1C" }}
                      >
                        {assignment.location}:
                      </span>{" "}
                      <span
                        className="font-medium"
                        style={{
                          color:
                            personColors[
                              assignment.person as keyof typeof personColors
                            ],
                        }}
                      >
                        {assignment.person}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
