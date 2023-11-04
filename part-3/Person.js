const MAX_NAME_LENGTH_TO_SHOW = 6;

/** Info on a single person.
 *
 * Props:
 * - name
 * - age
 * - hobbies: array, like ["cats", "bridge", "fighting the patriarchy"]
 */

function Person({ age, hobbies, name }) {
  const voteText = age >= 18 ? "Go vote!" : "Go study!";

  return (
    <div>
      <p>Learn some information about this person:</p>
      <ul>
        <li>Name: {name.slice(0, MAX_NAME_LENGTH_TO_SHOW)}</li>
        <li>Age: {age}</li>
        <ul>
          Hobbies:
          {hobbies.map((hobby) => (
            <li key={hobby}>{hobby}</li>
          ))}
        </ul>
      </ul>
      <h3>{voteText}</h3>
    </div>
  );
}
