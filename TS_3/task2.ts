
// Реализуйте в классе следующие методы:



type ObjectWithId = { id: number };

class CusmomerStorage<T extends ObjectWithId> {       
  // Создайте дженерик класс Storage<T>, где T должен быть ограничен объектом, имеющим КАК МИНИМУМ {id: number}.
  // Задача класса - хранить объекты типа Т в приватном массиве
  private items: T[];                           

  constructor(initialItems?: T[]) {
    //   - constructor должен принимать необзятельный массив объектов соответствующего типа.
    this.items = initialItems ? initialItems : [];
  }                                
//     Для типизации используйте Utility Types
  add(item: T): void;                                     //   - add, принимающий либо объект типа Т, либо объект типа Т без id. Метод должен быть реализовать с помощью ПЕРЕГРУЗКИ.
  add(item: Omit<T, "id">): void;
  add(item: T | Omit<T, "id">): void {
    if ("id" in item) {  
      this.items.push(item); //     Если массив пришел - объекты запушить в хранилище. Если на вход подан объект с айди - запушить его в хранилище
    } else {
      const newItem = { ...item, id: this.generateId() };
      this.items.push(newItem as T);
    }
  }

  update(updatedItem: ObjectWithId & T): void {            //   - update, принимающий объект с айди и любым набором остальных ключей из типа Т.
    this.items = this.items.filter((item) =>
      item.id === updatedItem.id ? { ...item, ...updatedItem } : item
    );
  }

  remove(id: number): void {                               //   - remove, принимающий на вход id и удаляющий объект из массива
    this.items = this.items.filter((item) => item.id !== id);
  }

  getById(id: number): T | undefined {                     //   - getById(id), возвращающий объект по айди если найден
    return this.items.find((item) => item.id === id);
  }

  getAll(): T[] {
    //   - getAll(), возвращает все объекты в хранилище
    return this.items;
  }

  private generateId(): number {
    //     Если на вход подан объект без айди - айди надо сгенерировать, затем запушить обьект в хранилище
    return this.items.length > 0
      ? Math.max(...this.items.map((item) => item.id)) + 1
      : 1;
  }
}

interface Istorage {
    id: number;

    name: string;
}


const storage = new CusmomerStorage<Istorage>([{id: 1, name: "First Object" }]);

storage.add({name: "new Object"});
storage.add({ id: 3, name: 'Second Object' });
console.log(storage.getAll());
storage.update({id: 1, name: "Updated Object"});
console.log(storage.getAll());
storage.remove(2);
console.log(storage.getAll());
console.log(storage.getById(1));