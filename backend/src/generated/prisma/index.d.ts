
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model ClearanceRequest
 * 
 */
export type ClearanceRequest = $Result.DefaultSelection<Prisma.$ClearanceRequestPayload>
/**
 * Model DepartmentClearanceStatus
 * 
 */
export type DepartmentClearanceStatus = $Result.DefaultSelection<Prisma.$DepartmentClearanceStatusPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clearanceRequest`: Exposes CRUD operations for the **ClearanceRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClearanceRequests
    * const clearanceRequests = await prisma.clearanceRequest.findMany()
    * ```
    */
  get clearanceRequest(): Prisma.ClearanceRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.departmentClearanceStatus`: Exposes CRUD operations for the **DepartmentClearanceStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DepartmentClearanceStatuses
    * const departmentClearanceStatuses = await prisma.departmentClearanceStatus.findMany()
    * ```
    */
  get departmentClearanceStatus(): Prisma.DepartmentClearanceStatusDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Department: 'Department',
    ClearanceRequest: 'ClearanceRequest',
    DepartmentClearanceStatus: 'DepartmentClearanceStatus'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "department" | "clearanceRequest" | "departmentClearanceStatus"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      ClearanceRequest: {
        payload: Prisma.$ClearanceRequestPayload<ExtArgs>
        fields: Prisma.ClearanceRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClearanceRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClearanceRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClearanceRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClearanceRequestPayload>
          }
          findFirst: {
            args: Prisma.ClearanceRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClearanceRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClearanceRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClearanceRequestPayload>
          }
          findMany: {
            args: Prisma.ClearanceRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClearanceRequestPayload>[]
          }
          create: {
            args: Prisma.ClearanceRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClearanceRequestPayload>
          }
          createMany: {
            args: Prisma.ClearanceRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ClearanceRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClearanceRequestPayload>
          }
          update: {
            args: Prisma.ClearanceRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClearanceRequestPayload>
          }
          deleteMany: {
            args: Prisma.ClearanceRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClearanceRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClearanceRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClearanceRequestPayload>
          }
          aggregate: {
            args: Prisma.ClearanceRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClearanceRequest>
          }
          groupBy: {
            args: Prisma.ClearanceRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClearanceRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClearanceRequestCountArgs<ExtArgs>
            result: $Utils.Optional<ClearanceRequestCountAggregateOutputType> | number
          }
        }
      }
      DepartmentClearanceStatus: {
        payload: Prisma.$DepartmentClearanceStatusPayload<ExtArgs>
        fields: Prisma.DepartmentClearanceStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentClearanceStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentClearanceStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentClearanceStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentClearanceStatusPayload>
          }
          findFirst: {
            args: Prisma.DepartmentClearanceStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentClearanceStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentClearanceStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentClearanceStatusPayload>
          }
          findMany: {
            args: Prisma.DepartmentClearanceStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentClearanceStatusPayload>[]
          }
          create: {
            args: Prisma.DepartmentClearanceStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentClearanceStatusPayload>
          }
          createMany: {
            args: Prisma.DepartmentClearanceStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DepartmentClearanceStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentClearanceStatusPayload>
          }
          update: {
            args: Prisma.DepartmentClearanceStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentClearanceStatusPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentClearanceStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentClearanceStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DepartmentClearanceStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentClearanceStatusPayload>
          }
          aggregate: {
            args: Prisma.DepartmentClearanceStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartmentClearanceStatus>
          }
          groupBy: {
            args: Prisma.DepartmentClearanceStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentClearanceStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentClearanceStatusCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentClearanceStatusCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    department?: DepartmentOmit
    clearanceRequest?: ClearanceRequestOmit
    departmentClearanceStatus?: DepartmentClearanceStatusOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    clearanceRequests: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clearanceRequests?: boolean | UserCountOutputTypeCountClearanceRequestsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClearanceRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClearanceRequestWhereInput
  }


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    departmentClearanceStatuses: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departmentClearanceStatuses?: boolean | DepartmentCountOutputTypeCountDepartmentClearanceStatusesArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountDepartmentClearanceStatusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentClearanceStatusWhereInput
  }


  /**
   * Count Type ClearanceRequestCountOutputType
   */

  export type ClearanceRequestCountOutputType = {
    departmentStatuses: number
  }

  export type ClearanceRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departmentStatuses?: boolean | ClearanceRequestCountOutputTypeCountDepartmentStatusesArgs
  }

  // Custom InputTypes
  /**
   * ClearanceRequestCountOutputType without action
   */
  export type ClearanceRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClearanceRequestCountOutputType
     */
    select?: ClearanceRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClearanceRequestCountOutputType without action
   */
  export type ClearanceRequestCountOutputTypeCountDepartmentStatusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentClearanceStatusWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    full_name: string | null
    email: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    full_name: string | null
    email: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    full_name: number
    email: number
    password: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    full_name: string
    email: string
    password: string
    role: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    clearanceRequests?: boolean | User$clearanceRequestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    full_name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "full_name" | "email" | "password" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clearanceRequests?: boolean | User$clearanceRequestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      clearanceRequests: Prisma.$ClearanceRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      full_name: string
      email: string
      password: string
      role: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clearanceRequests<T extends User$clearanceRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$clearanceRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClearanceRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly full_name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.clearanceRequests
   */
  export type User$clearanceRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClearanceRequest
     */
    select?: ClearanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClearanceRequest
     */
    omit?: ClearanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClearanceRequestInclude<ExtArgs> | null
    where?: ClearanceRequestWhereInput
    orderBy?: ClearanceRequestOrderByWithRelationInput | ClearanceRequestOrderByWithRelationInput[]
    cursor?: ClearanceRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClearanceRequestScalarFieldEnum | ClearanceRequestScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentAvgAggregateOutputType = {
    id: number | null
  }

  export type DepartmentSumAggregateOutputType = {
    id: number | null
  }

  export type DepartmentMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type DepartmentMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type DepartmentCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type DepartmentAvgAggregateInputType = {
    id?: true
  }

  export type DepartmentSumAggregateInputType = {
    id?: true
  }

  export type DepartmentMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type DepartmentMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type DepartmentCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepartmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepartmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _avg?: DepartmentAvgAggregateInputType
    _sum?: DepartmentSumAggregateInputType
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    id: number
    name: string
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    departmentClearanceStatuses?: boolean | Department$departmentClearanceStatusesArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>



  export type DepartmentSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type DepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["department"]>
  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departmentClearanceStatuses?: boolean | Department$departmentClearanceStatusesArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      departmentClearanceStatuses: Prisma.$DepartmentClearanceStatusPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentWithIdOnly = await prisma.department.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    departmentClearanceStatuses<T extends Department$departmentClearanceStatusesArgs<ExtArgs> = {}>(args?: Subset<T, Department$departmentClearanceStatusesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentClearanceStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Department model
   */
  interface DepartmentFieldRefs {
    readonly id: FieldRef<"Department", 'Int'>
    readonly name: FieldRef<"Department", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to delete.
     */
    limit?: number
  }

  /**
   * Department.departmentClearanceStatuses
   */
  export type Department$departmentClearanceStatusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentClearanceStatus
     */
    select?: DepartmentClearanceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartmentClearanceStatus
     */
    omit?: DepartmentClearanceStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentClearanceStatusInclude<ExtArgs> | null
    where?: DepartmentClearanceStatusWhereInput
    orderBy?: DepartmentClearanceStatusOrderByWithRelationInput | DepartmentClearanceStatusOrderByWithRelationInput[]
    cursor?: DepartmentClearanceStatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepartmentClearanceStatusScalarFieldEnum | DepartmentClearanceStatusScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Model ClearanceRequest
   */

  export type AggregateClearanceRequest = {
    _count: ClearanceRequestCountAggregateOutputType | null
    _avg: ClearanceRequestAvgAggregateOutputType | null
    _sum: ClearanceRequestSumAggregateOutputType | null
    _min: ClearanceRequestMinAggregateOutputType | null
    _max: ClearanceRequestMaxAggregateOutputType | null
  }

  export type ClearanceRequestAvgAggregateOutputType = {
    id: number | null
    student_id: number | null
  }

  export type ClearanceRequestSumAggregateOutputType = {
    id: number | null
    student_id: number | null
  }

  export type ClearanceRequestMinAggregateOutputType = {
    id: number | null
    student_id: number | null
    overall_status: string | null
    createdAt: Date | null
  }

  export type ClearanceRequestMaxAggregateOutputType = {
    id: number | null
    student_id: number | null
    overall_status: string | null
    createdAt: Date | null
  }

  export type ClearanceRequestCountAggregateOutputType = {
    id: number
    student_id: number
    overall_status: number
    createdAt: number
    _all: number
  }


  export type ClearanceRequestAvgAggregateInputType = {
    id?: true
    student_id?: true
  }

  export type ClearanceRequestSumAggregateInputType = {
    id?: true
    student_id?: true
  }

  export type ClearanceRequestMinAggregateInputType = {
    id?: true
    student_id?: true
    overall_status?: true
    createdAt?: true
  }

  export type ClearanceRequestMaxAggregateInputType = {
    id?: true
    student_id?: true
    overall_status?: true
    createdAt?: true
  }

  export type ClearanceRequestCountAggregateInputType = {
    id?: true
    student_id?: true
    overall_status?: true
    createdAt?: true
    _all?: true
  }

  export type ClearanceRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClearanceRequest to aggregate.
     */
    where?: ClearanceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClearanceRequests to fetch.
     */
    orderBy?: ClearanceRequestOrderByWithRelationInput | ClearanceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClearanceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClearanceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClearanceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClearanceRequests
    **/
    _count?: true | ClearanceRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClearanceRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClearanceRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClearanceRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClearanceRequestMaxAggregateInputType
  }

  export type GetClearanceRequestAggregateType<T extends ClearanceRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateClearanceRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClearanceRequest[P]>
      : GetScalarType<T[P], AggregateClearanceRequest[P]>
  }




  export type ClearanceRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClearanceRequestWhereInput
    orderBy?: ClearanceRequestOrderByWithAggregationInput | ClearanceRequestOrderByWithAggregationInput[]
    by: ClearanceRequestScalarFieldEnum[] | ClearanceRequestScalarFieldEnum
    having?: ClearanceRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClearanceRequestCountAggregateInputType | true
    _avg?: ClearanceRequestAvgAggregateInputType
    _sum?: ClearanceRequestSumAggregateInputType
    _min?: ClearanceRequestMinAggregateInputType
    _max?: ClearanceRequestMaxAggregateInputType
  }

  export type ClearanceRequestGroupByOutputType = {
    id: number
    student_id: number
    overall_status: string
    createdAt: Date
    _count: ClearanceRequestCountAggregateOutputType | null
    _avg: ClearanceRequestAvgAggregateOutputType | null
    _sum: ClearanceRequestSumAggregateOutputType | null
    _min: ClearanceRequestMinAggregateOutputType | null
    _max: ClearanceRequestMaxAggregateOutputType | null
  }

  type GetClearanceRequestGroupByPayload<T extends ClearanceRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClearanceRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClearanceRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClearanceRequestGroupByOutputType[P]>
            : GetScalarType<T[P], ClearanceRequestGroupByOutputType[P]>
        }
      >
    >


  export type ClearanceRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    overall_status?: boolean
    createdAt?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    departmentStatuses?: boolean | ClearanceRequest$departmentStatusesArgs<ExtArgs>
    _count?: boolean | ClearanceRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clearanceRequest"]>



  export type ClearanceRequestSelectScalar = {
    id?: boolean
    student_id?: boolean
    overall_status?: boolean
    createdAt?: boolean
  }

  export type ClearanceRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "student_id" | "overall_status" | "createdAt", ExtArgs["result"]["clearanceRequest"]>
  export type ClearanceRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    departmentStatuses?: boolean | ClearanceRequest$departmentStatusesArgs<ExtArgs>
    _count?: boolean | ClearanceRequestCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ClearanceRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClearanceRequest"
    objects: {
      student: Prisma.$UserPayload<ExtArgs>
      departmentStatuses: Prisma.$DepartmentClearanceStatusPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      student_id: number
      overall_status: string
      createdAt: Date
    }, ExtArgs["result"]["clearanceRequest"]>
    composites: {}
  }

  type ClearanceRequestGetPayload<S extends boolean | null | undefined | ClearanceRequestDefaultArgs> = $Result.GetResult<Prisma.$ClearanceRequestPayload, S>

  type ClearanceRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClearanceRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClearanceRequestCountAggregateInputType | true
    }

  export interface ClearanceRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClearanceRequest'], meta: { name: 'ClearanceRequest' } }
    /**
     * Find zero or one ClearanceRequest that matches the filter.
     * @param {ClearanceRequestFindUniqueArgs} args - Arguments to find a ClearanceRequest
     * @example
     * // Get one ClearanceRequest
     * const clearanceRequest = await prisma.clearanceRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClearanceRequestFindUniqueArgs>(args: SelectSubset<T, ClearanceRequestFindUniqueArgs<ExtArgs>>): Prisma__ClearanceRequestClient<$Result.GetResult<Prisma.$ClearanceRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClearanceRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClearanceRequestFindUniqueOrThrowArgs} args - Arguments to find a ClearanceRequest
     * @example
     * // Get one ClearanceRequest
     * const clearanceRequest = await prisma.clearanceRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClearanceRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, ClearanceRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClearanceRequestClient<$Result.GetResult<Prisma.$ClearanceRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClearanceRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClearanceRequestFindFirstArgs} args - Arguments to find a ClearanceRequest
     * @example
     * // Get one ClearanceRequest
     * const clearanceRequest = await prisma.clearanceRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClearanceRequestFindFirstArgs>(args?: SelectSubset<T, ClearanceRequestFindFirstArgs<ExtArgs>>): Prisma__ClearanceRequestClient<$Result.GetResult<Prisma.$ClearanceRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClearanceRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClearanceRequestFindFirstOrThrowArgs} args - Arguments to find a ClearanceRequest
     * @example
     * // Get one ClearanceRequest
     * const clearanceRequest = await prisma.clearanceRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClearanceRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, ClearanceRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClearanceRequestClient<$Result.GetResult<Prisma.$ClearanceRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClearanceRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClearanceRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClearanceRequests
     * const clearanceRequests = await prisma.clearanceRequest.findMany()
     * 
     * // Get first 10 ClearanceRequests
     * const clearanceRequests = await prisma.clearanceRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clearanceRequestWithIdOnly = await prisma.clearanceRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClearanceRequestFindManyArgs>(args?: SelectSubset<T, ClearanceRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClearanceRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClearanceRequest.
     * @param {ClearanceRequestCreateArgs} args - Arguments to create a ClearanceRequest.
     * @example
     * // Create one ClearanceRequest
     * const ClearanceRequest = await prisma.clearanceRequest.create({
     *   data: {
     *     // ... data to create a ClearanceRequest
     *   }
     * })
     * 
     */
    create<T extends ClearanceRequestCreateArgs>(args: SelectSubset<T, ClearanceRequestCreateArgs<ExtArgs>>): Prisma__ClearanceRequestClient<$Result.GetResult<Prisma.$ClearanceRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClearanceRequests.
     * @param {ClearanceRequestCreateManyArgs} args - Arguments to create many ClearanceRequests.
     * @example
     * // Create many ClearanceRequests
     * const clearanceRequest = await prisma.clearanceRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClearanceRequestCreateManyArgs>(args?: SelectSubset<T, ClearanceRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ClearanceRequest.
     * @param {ClearanceRequestDeleteArgs} args - Arguments to delete one ClearanceRequest.
     * @example
     * // Delete one ClearanceRequest
     * const ClearanceRequest = await prisma.clearanceRequest.delete({
     *   where: {
     *     // ... filter to delete one ClearanceRequest
     *   }
     * })
     * 
     */
    delete<T extends ClearanceRequestDeleteArgs>(args: SelectSubset<T, ClearanceRequestDeleteArgs<ExtArgs>>): Prisma__ClearanceRequestClient<$Result.GetResult<Prisma.$ClearanceRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClearanceRequest.
     * @param {ClearanceRequestUpdateArgs} args - Arguments to update one ClearanceRequest.
     * @example
     * // Update one ClearanceRequest
     * const clearanceRequest = await prisma.clearanceRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClearanceRequestUpdateArgs>(args: SelectSubset<T, ClearanceRequestUpdateArgs<ExtArgs>>): Prisma__ClearanceRequestClient<$Result.GetResult<Prisma.$ClearanceRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClearanceRequests.
     * @param {ClearanceRequestDeleteManyArgs} args - Arguments to filter ClearanceRequests to delete.
     * @example
     * // Delete a few ClearanceRequests
     * const { count } = await prisma.clearanceRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClearanceRequestDeleteManyArgs>(args?: SelectSubset<T, ClearanceRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClearanceRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClearanceRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClearanceRequests
     * const clearanceRequest = await prisma.clearanceRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClearanceRequestUpdateManyArgs>(args: SelectSubset<T, ClearanceRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ClearanceRequest.
     * @param {ClearanceRequestUpsertArgs} args - Arguments to update or create a ClearanceRequest.
     * @example
     * // Update or create a ClearanceRequest
     * const clearanceRequest = await prisma.clearanceRequest.upsert({
     *   create: {
     *     // ... data to create a ClearanceRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClearanceRequest we want to update
     *   }
     * })
     */
    upsert<T extends ClearanceRequestUpsertArgs>(args: SelectSubset<T, ClearanceRequestUpsertArgs<ExtArgs>>): Prisma__ClearanceRequestClient<$Result.GetResult<Prisma.$ClearanceRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClearanceRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClearanceRequestCountArgs} args - Arguments to filter ClearanceRequests to count.
     * @example
     * // Count the number of ClearanceRequests
     * const count = await prisma.clearanceRequest.count({
     *   where: {
     *     // ... the filter for the ClearanceRequests we want to count
     *   }
     * })
    **/
    count<T extends ClearanceRequestCountArgs>(
      args?: Subset<T, ClearanceRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClearanceRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClearanceRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClearanceRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClearanceRequestAggregateArgs>(args: Subset<T, ClearanceRequestAggregateArgs>): Prisma.PrismaPromise<GetClearanceRequestAggregateType<T>>

    /**
     * Group by ClearanceRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClearanceRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClearanceRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClearanceRequestGroupByArgs['orderBy'] }
        : { orderBy?: ClearanceRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClearanceRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClearanceRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClearanceRequest model
   */
  readonly fields: ClearanceRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClearanceRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClearanceRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    departmentStatuses<T extends ClearanceRequest$departmentStatusesArgs<ExtArgs> = {}>(args?: Subset<T, ClearanceRequest$departmentStatusesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentClearanceStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClearanceRequest model
   */
  interface ClearanceRequestFieldRefs {
    readonly id: FieldRef<"ClearanceRequest", 'Int'>
    readonly student_id: FieldRef<"ClearanceRequest", 'Int'>
    readonly overall_status: FieldRef<"ClearanceRequest", 'String'>
    readonly createdAt: FieldRef<"ClearanceRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClearanceRequest findUnique
   */
  export type ClearanceRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClearanceRequest
     */
    select?: ClearanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClearanceRequest
     */
    omit?: ClearanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClearanceRequestInclude<ExtArgs> | null
    /**
     * Filter, which ClearanceRequest to fetch.
     */
    where: ClearanceRequestWhereUniqueInput
  }

  /**
   * ClearanceRequest findUniqueOrThrow
   */
  export type ClearanceRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClearanceRequest
     */
    select?: ClearanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClearanceRequest
     */
    omit?: ClearanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClearanceRequestInclude<ExtArgs> | null
    /**
     * Filter, which ClearanceRequest to fetch.
     */
    where: ClearanceRequestWhereUniqueInput
  }

  /**
   * ClearanceRequest findFirst
   */
  export type ClearanceRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClearanceRequest
     */
    select?: ClearanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClearanceRequest
     */
    omit?: ClearanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClearanceRequestInclude<ExtArgs> | null
    /**
     * Filter, which ClearanceRequest to fetch.
     */
    where?: ClearanceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClearanceRequests to fetch.
     */
    orderBy?: ClearanceRequestOrderByWithRelationInput | ClearanceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClearanceRequests.
     */
    cursor?: ClearanceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClearanceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClearanceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClearanceRequests.
     */
    distinct?: ClearanceRequestScalarFieldEnum | ClearanceRequestScalarFieldEnum[]
  }

  /**
   * ClearanceRequest findFirstOrThrow
   */
  export type ClearanceRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClearanceRequest
     */
    select?: ClearanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClearanceRequest
     */
    omit?: ClearanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClearanceRequestInclude<ExtArgs> | null
    /**
     * Filter, which ClearanceRequest to fetch.
     */
    where?: ClearanceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClearanceRequests to fetch.
     */
    orderBy?: ClearanceRequestOrderByWithRelationInput | ClearanceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClearanceRequests.
     */
    cursor?: ClearanceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClearanceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClearanceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClearanceRequests.
     */
    distinct?: ClearanceRequestScalarFieldEnum | ClearanceRequestScalarFieldEnum[]
  }

  /**
   * ClearanceRequest findMany
   */
  export type ClearanceRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClearanceRequest
     */
    select?: ClearanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClearanceRequest
     */
    omit?: ClearanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClearanceRequestInclude<ExtArgs> | null
    /**
     * Filter, which ClearanceRequests to fetch.
     */
    where?: ClearanceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClearanceRequests to fetch.
     */
    orderBy?: ClearanceRequestOrderByWithRelationInput | ClearanceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClearanceRequests.
     */
    cursor?: ClearanceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClearanceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClearanceRequests.
     */
    skip?: number
    distinct?: ClearanceRequestScalarFieldEnum | ClearanceRequestScalarFieldEnum[]
  }

  /**
   * ClearanceRequest create
   */
  export type ClearanceRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClearanceRequest
     */
    select?: ClearanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClearanceRequest
     */
    omit?: ClearanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClearanceRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a ClearanceRequest.
     */
    data: XOR<ClearanceRequestCreateInput, ClearanceRequestUncheckedCreateInput>
  }

  /**
   * ClearanceRequest createMany
   */
  export type ClearanceRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClearanceRequests.
     */
    data: ClearanceRequestCreateManyInput | ClearanceRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClearanceRequest update
   */
  export type ClearanceRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClearanceRequest
     */
    select?: ClearanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClearanceRequest
     */
    omit?: ClearanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClearanceRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a ClearanceRequest.
     */
    data: XOR<ClearanceRequestUpdateInput, ClearanceRequestUncheckedUpdateInput>
    /**
     * Choose, which ClearanceRequest to update.
     */
    where: ClearanceRequestWhereUniqueInput
  }

  /**
   * ClearanceRequest updateMany
   */
  export type ClearanceRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClearanceRequests.
     */
    data: XOR<ClearanceRequestUpdateManyMutationInput, ClearanceRequestUncheckedUpdateManyInput>
    /**
     * Filter which ClearanceRequests to update
     */
    where?: ClearanceRequestWhereInput
    /**
     * Limit how many ClearanceRequests to update.
     */
    limit?: number
  }

  /**
   * ClearanceRequest upsert
   */
  export type ClearanceRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClearanceRequest
     */
    select?: ClearanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClearanceRequest
     */
    omit?: ClearanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClearanceRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the ClearanceRequest to update in case it exists.
     */
    where: ClearanceRequestWhereUniqueInput
    /**
     * In case the ClearanceRequest found by the `where` argument doesn't exist, create a new ClearanceRequest with this data.
     */
    create: XOR<ClearanceRequestCreateInput, ClearanceRequestUncheckedCreateInput>
    /**
     * In case the ClearanceRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClearanceRequestUpdateInput, ClearanceRequestUncheckedUpdateInput>
  }

  /**
   * ClearanceRequest delete
   */
  export type ClearanceRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClearanceRequest
     */
    select?: ClearanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClearanceRequest
     */
    omit?: ClearanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClearanceRequestInclude<ExtArgs> | null
    /**
     * Filter which ClearanceRequest to delete.
     */
    where: ClearanceRequestWhereUniqueInput
  }

  /**
   * ClearanceRequest deleteMany
   */
  export type ClearanceRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClearanceRequests to delete
     */
    where?: ClearanceRequestWhereInput
    /**
     * Limit how many ClearanceRequests to delete.
     */
    limit?: number
  }

  /**
   * ClearanceRequest.departmentStatuses
   */
  export type ClearanceRequest$departmentStatusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentClearanceStatus
     */
    select?: DepartmentClearanceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartmentClearanceStatus
     */
    omit?: DepartmentClearanceStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentClearanceStatusInclude<ExtArgs> | null
    where?: DepartmentClearanceStatusWhereInput
    orderBy?: DepartmentClearanceStatusOrderByWithRelationInput | DepartmentClearanceStatusOrderByWithRelationInput[]
    cursor?: DepartmentClearanceStatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepartmentClearanceStatusScalarFieldEnum | DepartmentClearanceStatusScalarFieldEnum[]
  }

  /**
   * ClearanceRequest without action
   */
  export type ClearanceRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClearanceRequest
     */
    select?: ClearanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClearanceRequest
     */
    omit?: ClearanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClearanceRequestInclude<ExtArgs> | null
  }


  /**
   * Model DepartmentClearanceStatus
   */

  export type AggregateDepartmentClearanceStatus = {
    _count: DepartmentClearanceStatusCountAggregateOutputType | null
    _avg: DepartmentClearanceStatusAvgAggregateOutputType | null
    _sum: DepartmentClearanceStatusSumAggregateOutputType | null
    _min: DepartmentClearanceStatusMinAggregateOutputType | null
    _max: DepartmentClearanceStatusMaxAggregateOutputType | null
  }

  export type DepartmentClearanceStatusAvgAggregateOutputType = {
    id: number | null
    clearance_request_id: number | null
    department_id: number | null
  }

  export type DepartmentClearanceStatusSumAggregateOutputType = {
    id: number | null
    clearance_request_id: number | null
    department_id: number | null
  }

  export type DepartmentClearanceStatusMinAggregateOutputType = {
    id: number | null
    clearance_request_id: number | null
    department_id: number | null
    status: string | null
    comment: string | null
    updated_at: Date | null
  }

  export type DepartmentClearanceStatusMaxAggregateOutputType = {
    id: number | null
    clearance_request_id: number | null
    department_id: number | null
    status: string | null
    comment: string | null
    updated_at: Date | null
  }

  export type DepartmentClearanceStatusCountAggregateOutputType = {
    id: number
    clearance_request_id: number
    department_id: number
    status: number
    comment: number
    updated_at: number
    _all: number
  }


  export type DepartmentClearanceStatusAvgAggregateInputType = {
    id?: true
    clearance_request_id?: true
    department_id?: true
  }

  export type DepartmentClearanceStatusSumAggregateInputType = {
    id?: true
    clearance_request_id?: true
    department_id?: true
  }

  export type DepartmentClearanceStatusMinAggregateInputType = {
    id?: true
    clearance_request_id?: true
    department_id?: true
    status?: true
    comment?: true
    updated_at?: true
  }

  export type DepartmentClearanceStatusMaxAggregateInputType = {
    id?: true
    clearance_request_id?: true
    department_id?: true
    status?: true
    comment?: true
    updated_at?: true
  }

  export type DepartmentClearanceStatusCountAggregateInputType = {
    id?: true
    clearance_request_id?: true
    department_id?: true
    status?: true
    comment?: true
    updated_at?: true
    _all?: true
  }

  export type DepartmentClearanceStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DepartmentClearanceStatus to aggregate.
     */
    where?: DepartmentClearanceStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepartmentClearanceStatuses to fetch.
     */
    orderBy?: DepartmentClearanceStatusOrderByWithRelationInput | DepartmentClearanceStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentClearanceStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepartmentClearanceStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepartmentClearanceStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DepartmentClearanceStatuses
    **/
    _count?: true | DepartmentClearanceStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepartmentClearanceStatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepartmentClearanceStatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentClearanceStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentClearanceStatusMaxAggregateInputType
  }

  export type GetDepartmentClearanceStatusAggregateType<T extends DepartmentClearanceStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartmentClearanceStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartmentClearanceStatus[P]>
      : GetScalarType<T[P], AggregateDepartmentClearanceStatus[P]>
  }




  export type DepartmentClearanceStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentClearanceStatusWhereInput
    orderBy?: DepartmentClearanceStatusOrderByWithAggregationInput | DepartmentClearanceStatusOrderByWithAggregationInput[]
    by: DepartmentClearanceStatusScalarFieldEnum[] | DepartmentClearanceStatusScalarFieldEnum
    having?: DepartmentClearanceStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentClearanceStatusCountAggregateInputType | true
    _avg?: DepartmentClearanceStatusAvgAggregateInputType
    _sum?: DepartmentClearanceStatusSumAggregateInputType
    _min?: DepartmentClearanceStatusMinAggregateInputType
    _max?: DepartmentClearanceStatusMaxAggregateInputType
  }

  export type DepartmentClearanceStatusGroupByOutputType = {
    id: number
    clearance_request_id: number
    department_id: number
    status: string
    comment: string | null
    updated_at: Date
    _count: DepartmentClearanceStatusCountAggregateOutputType | null
    _avg: DepartmentClearanceStatusAvgAggregateOutputType | null
    _sum: DepartmentClearanceStatusSumAggregateOutputType | null
    _min: DepartmentClearanceStatusMinAggregateOutputType | null
    _max: DepartmentClearanceStatusMaxAggregateOutputType | null
  }

  type GetDepartmentClearanceStatusGroupByPayload<T extends DepartmentClearanceStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentClearanceStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentClearanceStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentClearanceStatusGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentClearanceStatusGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentClearanceStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clearance_request_id?: boolean
    department_id?: boolean
    status?: boolean
    comment?: boolean
    updated_at?: boolean
    clearanceRequest?: boolean | ClearanceRequestDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["departmentClearanceStatus"]>



  export type DepartmentClearanceStatusSelectScalar = {
    id?: boolean
    clearance_request_id?: boolean
    department_id?: boolean
    status?: boolean
    comment?: boolean
    updated_at?: boolean
  }

  export type DepartmentClearanceStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clearance_request_id" | "department_id" | "status" | "comment" | "updated_at", ExtArgs["result"]["departmentClearanceStatus"]>
  export type DepartmentClearanceStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clearanceRequest?: boolean | ClearanceRequestDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }

  export type $DepartmentClearanceStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DepartmentClearanceStatus"
    objects: {
      clearanceRequest: Prisma.$ClearanceRequestPayload<ExtArgs>
      department: Prisma.$DepartmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clearance_request_id: number
      department_id: number
      status: string
      comment: string | null
      updated_at: Date
    }, ExtArgs["result"]["departmentClearanceStatus"]>
    composites: {}
  }

  type DepartmentClearanceStatusGetPayload<S extends boolean | null | undefined | DepartmentClearanceStatusDefaultArgs> = $Result.GetResult<Prisma.$DepartmentClearanceStatusPayload, S>

  type DepartmentClearanceStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentClearanceStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentClearanceStatusCountAggregateInputType | true
    }

  export interface DepartmentClearanceStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DepartmentClearanceStatus'], meta: { name: 'DepartmentClearanceStatus' } }
    /**
     * Find zero or one DepartmentClearanceStatus that matches the filter.
     * @param {DepartmentClearanceStatusFindUniqueArgs} args - Arguments to find a DepartmentClearanceStatus
     * @example
     * // Get one DepartmentClearanceStatus
     * const departmentClearanceStatus = await prisma.departmentClearanceStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentClearanceStatusFindUniqueArgs>(args: SelectSubset<T, DepartmentClearanceStatusFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClearanceStatusClient<$Result.GetResult<Prisma.$DepartmentClearanceStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DepartmentClearanceStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentClearanceStatusFindUniqueOrThrowArgs} args - Arguments to find a DepartmentClearanceStatus
     * @example
     * // Get one DepartmentClearanceStatus
     * const departmentClearanceStatus = await prisma.departmentClearanceStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentClearanceStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentClearanceStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClearanceStatusClient<$Result.GetResult<Prisma.$DepartmentClearanceStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DepartmentClearanceStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentClearanceStatusFindFirstArgs} args - Arguments to find a DepartmentClearanceStatus
     * @example
     * // Get one DepartmentClearanceStatus
     * const departmentClearanceStatus = await prisma.departmentClearanceStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentClearanceStatusFindFirstArgs>(args?: SelectSubset<T, DepartmentClearanceStatusFindFirstArgs<ExtArgs>>): Prisma__DepartmentClearanceStatusClient<$Result.GetResult<Prisma.$DepartmentClearanceStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DepartmentClearanceStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentClearanceStatusFindFirstOrThrowArgs} args - Arguments to find a DepartmentClearanceStatus
     * @example
     * // Get one DepartmentClearanceStatus
     * const departmentClearanceStatus = await prisma.departmentClearanceStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentClearanceStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentClearanceStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClearanceStatusClient<$Result.GetResult<Prisma.$DepartmentClearanceStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DepartmentClearanceStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentClearanceStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DepartmentClearanceStatuses
     * const departmentClearanceStatuses = await prisma.departmentClearanceStatus.findMany()
     * 
     * // Get first 10 DepartmentClearanceStatuses
     * const departmentClearanceStatuses = await prisma.departmentClearanceStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentClearanceStatusWithIdOnly = await prisma.departmentClearanceStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartmentClearanceStatusFindManyArgs>(args?: SelectSubset<T, DepartmentClearanceStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentClearanceStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DepartmentClearanceStatus.
     * @param {DepartmentClearanceStatusCreateArgs} args - Arguments to create a DepartmentClearanceStatus.
     * @example
     * // Create one DepartmentClearanceStatus
     * const DepartmentClearanceStatus = await prisma.departmentClearanceStatus.create({
     *   data: {
     *     // ... data to create a DepartmentClearanceStatus
     *   }
     * })
     * 
     */
    create<T extends DepartmentClearanceStatusCreateArgs>(args: SelectSubset<T, DepartmentClearanceStatusCreateArgs<ExtArgs>>): Prisma__DepartmentClearanceStatusClient<$Result.GetResult<Prisma.$DepartmentClearanceStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DepartmentClearanceStatuses.
     * @param {DepartmentClearanceStatusCreateManyArgs} args - Arguments to create many DepartmentClearanceStatuses.
     * @example
     * // Create many DepartmentClearanceStatuses
     * const departmentClearanceStatus = await prisma.departmentClearanceStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentClearanceStatusCreateManyArgs>(args?: SelectSubset<T, DepartmentClearanceStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DepartmentClearanceStatus.
     * @param {DepartmentClearanceStatusDeleteArgs} args - Arguments to delete one DepartmentClearanceStatus.
     * @example
     * // Delete one DepartmentClearanceStatus
     * const DepartmentClearanceStatus = await prisma.departmentClearanceStatus.delete({
     *   where: {
     *     // ... filter to delete one DepartmentClearanceStatus
     *   }
     * })
     * 
     */
    delete<T extends DepartmentClearanceStatusDeleteArgs>(args: SelectSubset<T, DepartmentClearanceStatusDeleteArgs<ExtArgs>>): Prisma__DepartmentClearanceStatusClient<$Result.GetResult<Prisma.$DepartmentClearanceStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DepartmentClearanceStatus.
     * @param {DepartmentClearanceStatusUpdateArgs} args - Arguments to update one DepartmentClearanceStatus.
     * @example
     * // Update one DepartmentClearanceStatus
     * const departmentClearanceStatus = await prisma.departmentClearanceStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentClearanceStatusUpdateArgs>(args: SelectSubset<T, DepartmentClearanceStatusUpdateArgs<ExtArgs>>): Prisma__DepartmentClearanceStatusClient<$Result.GetResult<Prisma.$DepartmentClearanceStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DepartmentClearanceStatuses.
     * @param {DepartmentClearanceStatusDeleteManyArgs} args - Arguments to filter DepartmentClearanceStatuses to delete.
     * @example
     * // Delete a few DepartmentClearanceStatuses
     * const { count } = await prisma.departmentClearanceStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentClearanceStatusDeleteManyArgs>(args?: SelectSubset<T, DepartmentClearanceStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DepartmentClearanceStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentClearanceStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DepartmentClearanceStatuses
     * const departmentClearanceStatus = await prisma.departmentClearanceStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentClearanceStatusUpdateManyArgs>(args: SelectSubset<T, DepartmentClearanceStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DepartmentClearanceStatus.
     * @param {DepartmentClearanceStatusUpsertArgs} args - Arguments to update or create a DepartmentClearanceStatus.
     * @example
     * // Update or create a DepartmentClearanceStatus
     * const departmentClearanceStatus = await prisma.departmentClearanceStatus.upsert({
     *   create: {
     *     // ... data to create a DepartmentClearanceStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DepartmentClearanceStatus we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentClearanceStatusUpsertArgs>(args: SelectSubset<T, DepartmentClearanceStatusUpsertArgs<ExtArgs>>): Prisma__DepartmentClearanceStatusClient<$Result.GetResult<Prisma.$DepartmentClearanceStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DepartmentClearanceStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentClearanceStatusCountArgs} args - Arguments to filter DepartmentClearanceStatuses to count.
     * @example
     * // Count the number of DepartmentClearanceStatuses
     * const count = await prisma.departmentClearanceStatus.count({
     *   where: {
     *     // ... the filter for the DepartmentClearanceStatuses we want to count
     *   }
     * })
    **/
    count<T extends DepartmentClearanceStatusCountArgs>(
      args?: Subset<T, DepartmentClearanceStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentClearanceStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DepartmentClearanceStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentClearanceStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartmentClearanceStatusAggregateArgs>(args: Subset<T, DepartmentClearanceStatusAggregateArgs>): Prisma.PrismaPromise<GetDepartmentClearanceStatusAggregateType<T>>

    /**
     * Group by DepartmentClearanceStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentClearanceStatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepartmentClearanceStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentClearanceStatusGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentClearanceStatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepartmentClearanceStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentClearanceStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DepartmentClearanceStatus model
   */
  readonly fields: DepartmentClearanceStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DepartmentClearanceStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClearanceStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clearanceRequest<T extends ClearanceRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClearanceRequestDefaultArgs<ExtArgs>>): Prisma__ClearanceRequestClient<$Result.GetResult<Prisma.$ClearanceRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    department<T extends DepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentDefaultArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DepartmentClearanceStatus model
   */
  interface DepartmentClearanceStatusFieldRefs {
    readonly id: FieldRef<"DepartmentClearanceStatus", 'Int'>
    readonly clearance_request_id: FieldRef<"DepartmentClearanceStatus", 'Int'>
    readonly department_id: FieldRef<"DepartmentClearanceStatus", 'Int'>
    readonly status: FieldRef<"DepartmentClearanceStatus", 'String'>
    readonly comment: FieldRef<"DepartmentClearanceStatus", 'String'>
    readonly updated_at: FieldRef<"DepartmentClearanceStatus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DepartmentClearanceStatus findUnique
   */
  export type DepartmentClearanceStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentClearanceStatus
     */
    select?: DepartmentClearanceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartmentClearanceStatus
     */
    omit?: DepartmentClearanceStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentClearanceStatusInclude<ExtArgs> | null
    /**
     * Filter, which DepartmentClearanceStatus to fetch.
     */
    where: DepartmentClearanceStatusWhereUniqueInput
  }

  /**
   * DepartmentClearanceStatus findUniqueOrThrow
   */
  export type DepartmentClearanceStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentClearanceStatus
     */
    select?: DepartmentClearanceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartmentClearanceStatus
     */
    omit?: DepartmentClearanceStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentClearanceStatusInclude<ExtArgs> | null
    /**
     * Filter, which DepartmentClearanceStatus to fetch.
     */
    where: DepartmentClearanceStatusWhereUniqueInput
  }

  /**
   * DepartmentClearanceStatus findFirst
   */
  export type DepartmentClearanceStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentClearanceStatus
     */
    select?: DepartmentClearanceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartmentClearanceStatus
     */
    omit?: DepartmentClearanceStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentClearanceStatusInclude<ExtArgs> | null
    /**
     * Filter, which DepartmentClearanceStatus to fetch.
     */
    where?: DepartmentClearanceStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepartmentClearanceStatuses to fetch.
     */
    orderBy?: DepartmentClearanceStatusOrderByWithRelationInput | DepartmentClearanceStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DepartmentClearanceStatuses.
     */
    cursor?: DepartmentClearanceStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepartmentClearanceStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepartmentClearanceStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DepartmentClearanceStatuses.
     */
    distinct?: DepartmentClearanceStatusScalarFieldEnum | DepartmentClearanceStatusScalarFieldEnum[]
  }

  /**
   * DepartmentClearanceStatus findFirstOrThrow
   */
  export type DepartmentClearanceStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentClearanceStatus
     */
    select?: DepartmentClearanceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartmentClearanceStatus
     */
    omit?: DepartmentClearanceStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentClearanceStatusInclude<ExtArgs> | null
    /**
     * Filter, which DepartmentClearanceStatus to fetch.
     */
    where?: DepartmentClearanceStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepartmentClearanceStatuses to fetch.
     */
    orderBy?: DepartmentClearanceStatusOrderByWithRelationInput | DepartmentClearanceStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DepartmentClearanceStatuses.
     */
    cursor?: DepartmentClearanceStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepartmentClearanceStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepartmentClearanceStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DepartmentClearanceStatuses.
     */
    distinct?: DepartmentClearanceStatusScalarFieldEnum | DepartmentClearanceStatusScalarFieldEnum[]
  }

  /**
   * DepartmentClearanceStatus findMany
   */
  export type DepartmentClearanceStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentClearanceStatus
     */
    select?: DepartmentClearanceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartmentClearanceStatus
     */
    omit?: DepartmentClearanceStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentClearanceStatusInclude<ExtArgs> | null
    /**
     * Filter, which DepartmentClearanceStatuses to fetch.
     */
    where?: DepartmentClearanceStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepartmentClearanceStatuses to fetch.
     */
    orderBy?: DepartmentClearanceStatusOrderByWithRelationInput | DepartmentClearanceStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DepartmentClearanceStatuses.
     */
    cursor?: DepartmentClearanceStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepartmentClearanceStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepartmentClearanceStatuses.
     */
    skip?: number
    distinct?: DepartmentClearanceStatusScalarFieldEnum | DepartmentClearanceStatusScalarFieldEnum[]
  }

  /**
   * DepartmentClearanceStatus create
   */
  export type DepartmentClearanceStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentClearanceStatus
     */
    select?: DepartmentClearanceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartmentClearanceStatus
     */
    omit?: DepartmentClearanceStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentClearanceStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a DepartmentClearanceStatus.
     */
    data: XOR<DepartmentClearanceStatusCreateInput, DepartmentClearanceStatusUncheckedCreateInput>
  }

  /**
   * DepartmentClearanceStatus createMany
   */
  export type DepartmentClearanceStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DepartmentClearanceStatuses.
     */
    data: DepartmentClearanceStatusCreateManyInput | DepartmentClearanceStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DepartmentClearanceStatus update
   */
  export type DepartmentClearanceStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentClearanceStatus
     */
    select?: DepartmentClearanceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartmentClearanceStatus
     */
    omit?: DepartmentClearanceStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentClearanceStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a DepartmentClearanceStatus.
     */
    data: XOR<DepartmentClearanceStatusUpdateInput, DepartmentClearanceStatusUncheckedUpdateInput>
    /**
     * Choose, which DepartmentClearanceStatus to update.
     */
    where: DepartmentClearanceStatusWhereUniqueInput
  }

  /**
   * DepartmentClearanceStatus updateMany
   */
  export type DepartmentClearanceStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DepartmentClearanceStatuses.
     */
    data: XOR<DepartmentClearanceStatusUpdateManyMutationInput, DepartmentClearanceStatusUncheckedUpdateManyInput>
    /**
     * Filter which DepartmentClearanceStatuses to update
     */
    where?: DepartmentClearanceStatusWhereInput
    /**
     * Limit how many DepartmentClearanceStatuses to update.
     */
    limit?: number
  }

  /**
   * DepartmentClearanceStatus upsert
   */
  export type DepartmentClearanceStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentClearanceStatus
     */
    select?: DepartmentClearanceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartmentClearanceStatus
     */
    omit?: DepartmentClearanceStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentClearanceStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the DepartmentClearanceStatus to update in case it exists.
     */
    where: DepartmentClearanceStatusWhereUniqueInput
    /**
     * In case the DepartmentClearanceStatus found by the `where` argument doesn't exist, create a new DepartmentClearanceStatus with this data.
     */
    create: XOR<DepartmentClearanceStatusCreateInput, DepartmentClearanceStatusUncheckedCreateInput>
    /**
     * In case the DepartmentClearanceStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentClearanceStatusUpdateInput, DepartmentClearanceStatusUncheckedUpdateInput>
  }

  /**
   * DepartmentClearanceStatus delete
   */
  export type DepartmentClearanceStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentClearanceStatus
     */
    select?: DepartmentClearanceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartmentClearanceStatus
     */
    omit?: DepartmentClearanceStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentClearanceStatusInclude<ExtArgs> | null
    /**
     * Filter which DepartmentClearanceStatus to delete.
     */
    where: DepartmentClearanceStatusWhereUniqueInput
  }

  /**
   * DepartmentClearanceStatus deleteMany
   */
  export type DepartmentClearanceStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DepartmentClearanceStatuses to delete
     */
    where?: DepartmentClearanceStatusWhereInput
    /**
     * Limit how many DepartmentClearanceStatuses to delete.
     */
    limit?: number
  }

  /**
   * DepartmentClearanceStatus without action
   */
  export type DepartmentClearanceStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentClearanceStatus
     */
    select?: DepartmentClearanceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartmentClearanceStatus
     */
    omit?: DepartmentClearanceStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentClearanceStatusInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    full_name: 'full_name',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const ClearanceRequestScalarFieldEnum: {
    id: 'id',
    student_id: 'student_id',
    overall_status: 'overall_status',
    createdAt: 'createdAt'
  };

  export type ClearanceRequestScalarFieldEnum = (typeof ClearanceRequestScalarFieldEnum)[keyof typeof ClearanceRequestScalarFieldEnum]


  export const DepartmentClearanceStatusScalarFieldEnum: {
    id: 'id',
    clearance_request_id: 'clearance_request_id',
    department_id: 'department_id',
    status: 'status',
    comment: 'comment',
    updated_at: 'updated_at'
  };

  export type DepartmentClearanceStatusScalarFieldEnum = (typeof DepartmentClearanceStatusScalarFieldEnum)[keyof typeof DepartmentClearanceStatusScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    full_name: 'full_name',
    email: 'email',
    password: 'password',
    role: 'role'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const DepartmentOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type DepartmentOrderByRelevanceFieldEnum = (typeof DepartmentOrderByRelevanceFieldEnum)[keyof typeof DepartmentOrderByRelevanceFieldEnum]


  export const ClearanceRequestOrderByRelevanceFieldEnum: {
    overall_status: 'overall_status'
  };

  export type ClearanceRequestOrderByRelevanceFieldEnum = (typeof ClearanceRequestOrderByRelevanceFieldEnum)[keyof typeof ClearanceRequestOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const DepartmentClearanceStatusOrderByRelevanceFieldEnum: {
    status: 'status',
    comment: 'comment'
  };

  export type DepartmentClearanceStatusOrderByRelevanceFieldEnum = (typeof DepartmentClearanceStatusOrderByRelevanceFieldEnum)[keyof typeof DepartmentClearanceStatusOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    full_name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    clearanceRequests?: ClearanceRequestListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    clearanceRequests?: ClearanceRequestOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    full_name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    clearanceRequests?: ClearanceRequestListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    full_name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    id?: IntFilter<"Department"> | number
    name?: StringFilter<"Department"> | string
    departmentClearanceStatuses?: DepartmentClearanceStatusListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    departmentClearanceStatuses?: DepartmentClearanceStatusOrderByRelationAggregateInput
    _relevance?: DepartmentOrderByRelevanceInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    departmentClearanceStatuses?: DepartmentClearanceStatusListRelationFilter
  }, "id" | "name">

  export type DepartmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _avg?: DepartmentAvgOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
    _sum?: DepartmentSumOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Department"> | number
    name?: StringWithAggregatesFilter<"Department"> | string
  }

  export type ClearanceRequestWhereInput = {
    AND?: ClearanceRequestWhereInput | ClearanceRequestWhereInput[]
    OR?: ClearanceRequestWhereInput[]
    NOT?: ClearanceRequestWhereInput | ClearanceRequestWhereInput[]
    id?: IntFilter<"ClearanceRequest"> | number
    student_id?: IntFilter<"ClearanceRequest"> | number
    overall_status?: StringFilter<"ClearanceRequest"> | string
    createdAt?: DateTimeFilter<"ClearanceRequest"> | Date | string
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    departmentStatuses?: DepartmentClearanceStatusListRelationFilter
  }

  export type ClearanceRequestOrderByWithRelationInput = {
    id?: SortOrder
    student_id?: SortOrder
    overall_status?: SortOrder
    createdAt?: SortOrder
    student?: UserOrderByWithRelationInput
    departmentStatuses?: DepartmentClearanceStatusOrderByRelationAggregateInput
    _relevance?: ClearanceRequestOrderByRelevanceInput
  }

  export type ClearanceRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClearanceRequestWhereInput | ClearanceRequestWhereInput[]
    OR?: ClearanceRequestWhereInput[]
    NOT?: ClearanceRequestWhereInput | ClearanceRequestWhereInput[]
    student_id?: IntFilter<"ClearanceRequest"> | number
    overall_status?: StringFilter<"ClearanceRequest"> | string
    createdAt?: DateTimeFilter<"ClearanceRequest"> | Date | string
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    departmentStatuses?: DepartmentClearanceStatusListRelationFilter
  }, "id">

  export type ClearanceRequestOrderByWithAggregationInput = {
    id?: SortOrder
    student_id?: SortOrder
    overall_status?: SortOrder
    createdAt?: SortOrder
    _count?: ClearanceRequestCountOrderByAggregateInput
    _avg?: ClearanceRequestAvgOrderByAggregateInput
    _max?: ClearanceRequestMaxOrderByAggregateInput
    _min?: ClearanceRequestMinOrderByAggregateInput
    _sum?: ClearanceRequestSumOrderByAggregateInput
  }

  export type ClearanceRequestScalarWhereWithAggregatesInput = {
    AND?: ClearanceRequestScalarWhereWithAggregatesInput | ClearanceRequestScalarWhereWithAggregatesInput[]
    OR?: ClearanceRequestScalarWhereWithAggregatesInput[]
    NOT?: ClearanceRequestScalarWhereWithAggregatesInput | ClearanceRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ClearanceRequest"> | number
    student_id?: IntWithAggregatesFilter<"ClearanceRequest"> | number
    overall_status?: StringWithAggregatesFilter<"ClearanceRequest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ClearanceRequest"> | Date | string
  }

  export type DepartmentClearanceStatusWhereInput = {
    AND?: DepartmentClearanceStatusWhereInput | DepartmentClearanceStatusWhereInput[]
    OR?: DepartmentClearanceStatusWhereInput[]
    NOT?: DepartmentClearanceStatusWhereInput | DepartmentClearanceStatusWhereInput[]
    id?: IntFilter<"DepartmentClearanceStatus"> | number
    clearance_request_id?: IntFilter<"DepartmentClearanceStatus"> | number
    department_id?: IntFilter<"DepartmentClearanceStatus"> | number
    status?: StringFilter<"DepartmentClearanceStatus"> | string
    comment?: StringNullableFilter<"DepartmentClearanceStatus"> | string | null
    updated_at?: DateTimeFilter<"DepartmentClearanceStatus"> | Date | string
    clearanceRequest?: XOR<ClearanceRequestScalarRelationFilter, ClearanceRequestWhereInput>
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
  }

  export type DepartmentClearanceStatusOrderByWithRelationInput = {
    id?: SortOrder
    clearance_request_id?: SortOrder
    department_id?: SortOrder
    status?: SortOrder
    comment?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    clearanceRequest?: ClearanceRequestOrderByWithRelationInput
    department?: DepartmentOrderByWithRelationInput
    _relevance?: DepartmentClearanceStatusOrderByRelevanceInput
  }

  export type DepartmentClearanceStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DepartmentClearanceStatusWhereInput | DepartmentClearanceStatusWhereInput[]
    OR?: DepartmentClearanceStatusWhereInput[]
    NOT?: DepartmentClearanceStatusWhereInput | DepartmentClearanceStatusWhereInput[]
    clearance_request_id?: IntFilter<"DepartmentClearanceStatus"> | number
    department_id?: IntFilter<"DepartmentClearanceStatus"> | number
    status?: StringFilter<"DepartmentClearanceStatus"> | string
    comment?: StringNullableFilter<"DepartmentClearanceStatus"> | string | null
    updated_at?: DateTimeFilter<"DepartmentClearanceStatus"> | Date | string
    clearanceRequest?: XOR<ClearanceRequestScalarRelationFilter, ClearanceRequestWhereInput>
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
  }, "id">

  export type DepartmentClearanceStatusOrderByWithAggregationInput = {
    id?: SortOrder
    clearance_request_id?: SortOrder
    department_id?: SortOrder
    status?: SortOrder
    comment?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    _count?: DepartmentClearanceStatusCountOrderByAggregateInput
    _avg?: DepartmentClearanceStatusAvgOrderByAggregateInput
    _max?: DepartmentClearanceStatusMaxOrderByAggregateInput
    _min?: DepartmentClearanceStatusMinOrderByAggregateInput
    _sum?: DepartmentClearanceStatusSumOrderByAggregateInput
  }

  export type DepartmentClearanceStatusScalarWhereWithAggregatesInput = {
    AND?: DepartmentClearanceStatusScalarWhereWithAggregatesInput | DepartmentClearanceStatusScalarWhereWithAggregatesInput[]
    OR?: DepartmentClearanceStatusScalarWhereWithAggregatesInput[]
    NOT?: DepartmentClearanceStatusScalarWhereWithAggregatesInput | DepartmentClearanceStatusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DepartmentClearanceStatus"> | number
    clearance_request_id?: IntWithAggregatesFilter<"DepartmentClearanceStatus"> | number
    department_id?: IntWithAggregatesFilter<"DepartmentClearanceStatus"> | number
    status?: StringWithAggregatesFilter<"DepartmentClearanceStatus"> | string
    comment?: StringNullableWithAggregatesFilter<"DepartmentClearanceStatus"> | string | null
    updated_at?: DateTimeWithAggregatesFilter<"DepartmentClearanceStatus"> | Date | string
  }

  export type UserCreateInput = {
    full_name: string
    email: string
    password: string
    role: string
    createdAt?: Date | string
    clearanceRequests?: ClearanceRequestCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    full_name: string
    email: string
    password: string
    role: string
    createdAt?: Date | string
    clearanceRequests?: ClearanceRequestUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserUpdateInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clearanceRequests?: ClearanceRequestUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clearanceRequests?: ClearanceRequestUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    full_name: string
    email: string
    password: string
    role: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentCreateInput = {
    name: string
    departmentClearanceStatuses?: DepartmentClearanceStatusCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    id?: number
    name: string
    departmentClearanceStatuses?: DepartmentClearanceStatusUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    departmentClearanceStatuses?: DepartmentClearanceStatusUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    departmentClearanceStatuses?: DepartmentClearanceStatusUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    id?: number
    name: string
  }

  export type DepartmentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ClearanceRequestCreateInput = {
    overall_status?: string
    createdAt?: Date | string
    student: UserCreateNestedOneWithoutClearanceRequestsInput
    departmentStatuses?: DepartmentClearanceStatusCreateNestedManyWithoutClearanceRequestInput
  }

  export type ClearanceRequestUncheckedCreateInput = {
    id?: number
    student_id: number
    overall_status?: string
    createdAt?: Date | string
    departmentStatuses?: DepartmentClearanceStatusUncheckedCreateNestedManyWithoutClearanceRequestInput
  }

  export type ClearanceRequestUpdateInput = {
    overall_status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutClearanceRequestsNestedInput
    departmentStatuses?: DepartmentClearanceStatusUpdateManyWithoutClearanceRequestNestedInput
  }

  export type ClearanceRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    overall_status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departmentStatuses?: DepartmentClearanceStatusUncheckedUpdateManyWithoutClearanceRequestNestedInput
  }

  export type ClearanceRequestCreateManyInput = {
    id?: number
    student_id: number
    overall_status?: string
    createdAt?: Date | string
  }

  export type ClearanceRequestUpdateManyMutationInput = {
    overall_status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClearanceRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    overall_status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentClearanceStatusCreateInput = {
    status?: string
    comment?: string | null
    updated_at?: Date | string
    clearanceRequest: ClearanceRequestCreateNestedOneWithoutDepartmentStatusesInput
    department: DepartmentCreateNestedOneWithoutDepartmentClearanceStatusesInput
  }

  export type DepartmentClearanceStatusUncheckedCreateInput = {
    id?: number
    clearance_request_id: number
    department_id: number
    status?: string
    comment?: string | null
    updated_at?: Date | string
  }

  export type DepartmentClearanceStatusUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clearanceRequest?: ClearanceRequestUpdateOneRequiredWithoutDepartmentStatusesNestedInput
    department?: DepartmentUpdateOneRequiredWithoutDepartmentClearanceStatusesNestedInput
  }

  export type DepartmentClearanceStatusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clearance_request_id?: IntFieldUpdateOperationsInput | number
    department_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentClearanceStatusCreateManyInput = {
    id?: number
    clearance_request_id: number
    department_id: number
    status?: string
    comment?: string | null
    updated_at?: Date | string
  }

  export type DepartmentClearanceStatusUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentClearanceStatusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clearance_request_id?: IntFieldUpdateOperationsInput | number
    department_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ClearanceRequestListRelationFilter = {
    every?: ClearanceRequestWhereInput
    some?: ClearanceRequestWhereInput
    none?: ClearanceRequestWhereInput
  }

  export type ClearanceRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DepartmentClearanceStatusListRelationFilter = {
    every?: DepartmentClearanceStatusWhereInput
    some?: DepartmentClearanceStatusWhereInput
    none?: DepartmentClearanceStatusWhereInput
  }

  export type DepartmentClearanceStatusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartmentOrderByRelevanceInput = {
    fields: DepartmentOrderByRelevanceFieldEnum | DepartmentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DepartmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DepartmentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DepartmentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ClearanceRequestOrderByRelevanceInput = {
    fields: ClearanceRequestOrderByRelevanceFieldEnum | ClearanceRequestOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ClearanceRequestCountOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    overall_status?: SortOrder
    createdAt?: SortOrder
  }

  export type ClearanceRequestAvgOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
  }

  export type ClearanceRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    overall_status?: SortOrder
    createdAt?: SortOrder
  }

  export type ClearanceRequestMinOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    overall_status?: SortOrder
    createdAt?: SortOrder
  }

  export type ClearanceRequestSumOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ClearanceRequestScalarRelationFilter = {
    is?: ClearanceRequestWhereInput
    isNot?: ClearanceRequestWhereInput
  }

  export type DepartmentScalarRelationFilter = {
    is?: DepartmentWhereInput
    isNot?: DepartmentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DepartmentClearanceStatusOrderByRelevanceInput = {
    fields: DepartmentClearanceStatusOrderByRelevanceFieldEnum | DepartmentClearanceStatusOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DepartmentClearanceStatusCountOrderByAggregateInput = {
    id?: SortOrder
    clearance_request_id?: SortOrder
    department_id?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    updated_at?: SortOrder
  }

  export type DepartmentClearanceStatusAvgOrderByAggregateInput = {
    id?: SortOrder
    clearance_request_id?: SortOrder
    department_id?: SortOrder
  }

  export type DepartmentClearanceStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    clearance_request_id?: SortOrder
    department_id?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    updated_at?: SortOrder
  }

  export type DepartmentClearanceStatusMinOrderByAggregateInput = {
    id?: SortOrder
    clearance_request_id?: SortOrder
    department_id?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    updated_at?: SortOrder
  }

  export type DepartmentClearanceStatusSumOrderByAggregateInput = {
    id?: SortOrder
    clearance_request_id?: SortOrder
    department_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ClearanceRequestCreateNestedManyWithoutStudentInput = {
    create?: XOR<ClearanceRequestCreateWithoutStudentInput, ClearanceRequestUncheckedCreateWithoutStudentInput> | ClearanceRequestCreateWithoutStudentInput[] | ClearanceRequestUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ClearanceRequestCreateOrConnectWithoutStudentInput | ClearanceRequestCreateOrConnectWithoutStudentInput[]
    createMany?: ClearanceRequestCreateManyStudentInputEnvelope
    connect?: ClearanceRequestWhereUniqueInput | ClearanceRequestWhereUniqueInput[]
  }

  export type ClearanceRequestUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<ClearanceRequestCreateWithoutStudentInput, ClearanceRequestUncheckedCreateWithoutStudentInput> | ClearanceRequestCreateWithoutStudentInput[] | ClearanceRequestUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ClearanceRequestCreateOrConnectWithoutStudentInput | ClearanceRequestCreateOrConnectWithoutStudentInput[]
    createMany?: ClearanceRequestCreateManyStudentInputEnvelope
    connect?: ClearanceRequestWhereUniqueInput | ClearanceRequestWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClearanceRequestUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ClearanceRequestCreateWithoutStudentInput, ClearanceRequestUncheckedCreateWithoutStudentInput> | ClearanceRequestCreateWithoutStudentInput[] | ClearanceRequestUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ClearanceRequestCreateOrConnectWithoutStudentInput | ClearanceRequestCreateOrConnectWithoutStudentInput[]
    upsert?: ClearanceRequestUpsertWithWhereUniqueWithoutStudentInput | ClearanceRequestUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ClearanceRequestCreateManyStudentInputEnvelope
    set?: ClearanceRequestWhereUniqueInput | ClearanceRequestWhereUniqueInput[]
    disconnect?: ClearanceRequestWhereUniqueInput | ClearanceRequestWhereUniqueInput[]
    delete?: ClearanceRequestWhereUniqueInput | ClearanceRequestWhereUniqueInput[]
    connect?: ClearanceRequestWhereUniqueInput | ClearanceRequestWhereUniqueInput[]
    update?: ClearanceRequestUpdateWithWhereUniqueWithoutStudentInput | ClearanceRequestUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ClearanceRequestUpdateManyWithWhereWithoutStudentInput | ClearanceRequestUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ClearanceRequestScalarWhereInput | ClearanceRequestScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClearanceRequestUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ClearanceRequestCreateWithoutStudentInput, ClearanceRequestUncheckedCreateWithoutStudentInput> | ClearanceRequestCreateWithoutStudentInput[] | ClearanceRequestUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ClearanceRequestCreateOrConnectWithoutStudentInput | ClearanceRequestCreateOrConnectWithoutStudentInput[]
    upsert?: ClearanceRequestUpsertWithWhereUniqueWithoutStudentInput | ClearanceRequestUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ClearanceRequestCreateManyStudentInputEnvelope
    set?: ClearanceRequestWhereUniqueInput | ClearanceRequestWhereUniqueInput[]
    disconnect?: ClearanceRequestWhereUniqueInput | ClearanceRequestWhereUniqueInput[]
    delete?: ClearanceRequestWhereUniqueInput | ClearanceRequestWhereUniqueInput[]
    connect?: ClearanceRequestWhereUniqueInput | ClearanceRequestWhereUniqueInput[]
    update?: ClearanceRequestUpdateWithWhereUniqueWithoutStudentInput | ClearanceRequestUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ClearanceRequestUpdateManyWithWhereWithoutStudentInput | ClearanceRequestUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ClearanceRequestScalarWhereInput | ClearanceRequestScalarWhereInput[]
  }

  export type DepartmentClearanceStatusCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<DepartmentClearanceStatusCreateWithoutDepartmentInput, DepartmentClearanceStatusUncheckedCreateWithoutDepartmentInput> | DepartmentClearanceStatusCreateWithoutDepartmentInput[] | DepartmentClearanceStatusUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: DepartmentClearanceStatusCreateOrConnectWithoutDepartmentInput | DepartmentClearanceStatusCreateOrConnectWithoutDepartmentInput[]
    createMany?: DepartmentClearanceStatusCreateManyDepartmentInputEnvelope
    connect?: DepartmentClearanceStatusWhereUniqueInput | DepartmentClearanceStatusWhereUniqueInput[]
  }

  export type DepartmentClearanceStatusUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<DepartmentClearanceStatusCreateWithoutDepartmentInput, DepartmentClearanceStatusUncheckedCreateWithoutDepartmentInput> | DepartmentClearanceStatusCreateWithoutDepartmentInput[] | DepartmentClearanceStatusUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: DepartmentClearanceStatusCreateOrConnectWithoutDepartmentInput | DepartmentClearanceStatusCreateOrConnectWithoutDepartmentInput[]
    createMany?: DepartmentClearanceStatusCreateManyDepartmentInputEnvelope
    connect?: DepartmentClearanceStatusWhereUniqueInput | DepartmentClearanceStatusWhereUniqueInput[]
  }

  export type DepartmentClearanceStatusUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<DepartmentClearanceStatusCreateWithoutDepartmentInput, DepartmentClearanceStatusUncheckedCreateWithoutDepartmentInput> | DepartmentClearanceStatusCreateWithoutDepartmentInput[] | DepartmentClearanceStatusUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: DepartmentClearanceStatusCreateOrConnectWithoutDepartmentInput | DepartmentClearanceStatusCreateOrConnectWithoutDepartmentInput[]
    upsert?: DepartmentClearanceStatusUpsertWithWhereUniqueWithoutDepartmentInput | DepartmentClearanceStatusUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: DepartmentClearanceStatusCreateManyDepartmentInputEnvelope
    set?: DepartmentClearanceStatusWhereUniqueInput | DepartmentClearanceStatusWhereUniqueInput[]
    disconnect?: DepartmentClearanceStatusWhereUniqueInput | DepartmentClearanceStatusWhereUniqueInput[]
    delete?: DepartmentClearanceStatusWhereUniqueInput | DepartmentClearanceStatusWhereUniqueInput[]
    connect?: DepartmentClearanceStatusWhereUniqueInput | DepartmentClearanceStatusWhereUniqueInput[]
    update?: DepartmentClearanceStatusUpdateWithWhereUniqueWithoutDepartmentInput | DepartmentClearanceStatusUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: DepartmentClearanceStatusUpdateManyWithWhereWithoutDepartmentInput | DepartmentClearanceStatusUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: DepartmentClearanceStatusScalarWhereInput | DepartmentClearanceStatusScalarWhereInput[]
  }

  export type DepartmentClearanceStatusUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<DepartmentClearanceStatusCreateWithoutDepartmentInput, DepartmentClearanceStatusUncheckedCreateWithoutDepartmentInput> | DepartmentClearanceStatusCreateWithoutDepartmentInput[] | DepartmentClearanceStatusUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: DepartmentClearanceStatusCreateOrConnectWithoutDepartmentInput | DepartmentClearanceStatusCreateOrConnectWithoutDepartmentInput[]
    upsert?: DepartmentClearanceStatusUpsertWithWhereUniqueWithoutDepartmentInput | DepartmentClearanceStatusUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: DepartmentClearanceStatusCreateManyDepartmentInputEnvelope
    set?: DepartmentClearanceStatusWhereUniqueInput | DepartmentClearanceStatusWhereUniqueInput[]
    disconnect?: DepartmentClearanceStatusWhereUniqueInput | DepartmentClearanceStatusWhereUniqueInput[]
    delete?: DepartmentClearanceStatusWhereUniqueInput | DepartmentClearanceStatusWhereUniqueInput[]
    connect?: DepartmentClearanceStatusWhereUniqueInput | DepartmentClearanceStatusWhereUniqueInput[]
    update?: DepartmentClearanceStatusUpdateWithWhereUniqueWithoutDepartmentInput | DepartmentClearanceStatusUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: DepartmentClearanceStatusUpdateManyWithWhereWithoutDepartmentInput | DepartmentClearanceStatusUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: DepartmentClearanceStatusScalarWhereInput | DepartmentClearanceStatusScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutClearanceRequestsInput = {
    create?: XOR<UserCreateWithoutClearanceRequestsInput, UserUncheckedCreateWithoutClearanceRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClearanceRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type DepartmentClearanceStatusCreateNestedManyWithoutClearanceRequestInput = {
    create?: XOR<DepartmentClearanceStatusCreateWithoutClearanceRequestInput, DepartmentClearanceStatusUncheckedCreateWithoutClearanceRequestInput> | DepartmentClearanceStatusCreateWithoutClearanceRequestInput[] | DepartmentClearanceStatusUncheckedCreateWithoutClearanceRequestInput[]
    connectOrCreate?: DepartmentClearanceStatusCreateOrConnectWithoutClearanceRequestInput | DepartmentClearanceStatusCreateOrConnectWithoutClearanceRequestInput[]
    createMany?: DepartmentClearanceStatusCreateManyClearanceRequestInputEnvelope
    connect?: DepartmentClearanceStatusWhereUniqueInput | DepartmentClearanceStatusWhereUniqueInput[]
  }

  export type DepartmentClearanceStatusUncheckedCreateNestedManyWithoutClearanceRequestInput = {
    create?: XOR<DepartmentClearanceStatusCreateWithoutClearanceRequestInput, DepartmentClearanceStatusUncheckedCreateWithoutClearanceRequestInput> | DepartmentClearanceStatusCreateWithoutClearanceRequestInput[] | DepartmentClearanceStatusUncheckedCreateWithoutClearanceRequestInput[]
    connectOrCreate?: DepartmentClearanceStatusCreateOrConnectWithoutClearanceRequestInput | DepartmentClearanceStatusCreateOrConnectWithoutClearanceRequestInput[]
    createMany?: DepartmentClearanceStatusCreateManyClearanceRequestInputEnvelope
    connect?: DepartmentClearanceStatusWhereUniqueInput | DepartmentClearanceStatusWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutClearanceRequestsNestedInput = {
    create?: XOR<UserCreateWithoutClearanceRequestsInput, UserUncheckedCreateWithoutClearanceRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClearanceRequestsInput
    upsert?: UserUpsertWithoutClearanceRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClearanceRequestsInput, UserUpdateWithoutClearanceRequestsInput>, UserUncheckedUpdateWithoutClearanceRequestsInput>
  }

  export type DepartmentClearanceStatusUpdateManyWithoutClearanceRequestNestedInput = {
    create?: XOR<DepartmentClearanceStatusCreateWithoutClearanceRequestInput, DepartmentClearanceStatusUncheckedCreateWithoutClearanceRequestInput> | DepartmentClearanceStatusCreateWithoutClearanceRequestInput[] | DepartmentClearanceStatusUncheckedCreateWithoutClearanceRequestInput[]
    connectOrCreate?: DepartmentClearanceStatusCreateOrConnectWithoutClearanceRequestInput | DepartmentClearanceStatusCreateOrConnectWithoutClearanceRequestInput[]
    upsert?: DepartmentClearanceStatusUpsertWithWhereUniqueWithoutClearanceRequestInput | DepartmentClearanceStatusUpsertWithWhereUniqueWithoutClearanceRequestInput[]
    createMany?: DepartmentClearanceStatusCreateManyClearanceRequestInputEnvelope
    set?: DepartmentClearanceStatusWhereUniqueInput | DepartmentClearanceStatusWhereUniqueInput[]
    disconnect?: DepartmentClearanceStatusWhereUniqueInput | DepartmentClearanceStatusWhereUniqueInput[]
    delete?: DepartmentClearanceStatusWhereUniqueInput | DepartmentClearanceStatusWhereUniqueInput[]
    connect?: DepartmentClearanceStatusWhereUniqueInput | DepartmentClearanceStatusWhereUniqueInput[]
    update?: DepartmentClearanceStatusUpdateWithWhereUniqueWithoutClearanceRequestInput | DepartmentClearanceStatusUpdateWithWhereUniqueWithoutClearanceRequestInput[]
    updateMany?: DepartmentClearanceStatusUpdateManyWithWhereWithoutClearanceRequestInput | DepartmentClearanceStatusUpdateManyWithWhereWithoutClearanceRequestInput[]
    deleteMany?: DepartmentClearanceStatusScalarWhereInput | DepartmentClearanceStatusScalarWhereInput[]
  }

  export type DepartmentClearanceStatusUncheckedUpdateManyWithoutClearanceRequestNestedInput = {
    create?: XOR<DepartmentClearanceStatusCreateWithoutClearanceRequestInput, DepartmentClearanceStatusUncheckedCreateWithoutClearanceRequestInput> | DepartmentClearanceStatusCreateWithoutClearanceRequestInput[] | DepartmentClearanceStatusUncheckedCreateWithoutClearanceRequestInput[]
    connectOrCreate?: DepartmentClearanceStatusCreateOrConnectWithoutClearanceRequestInput | DepartmentClearanceStatusCreateOrConnectWithoutClearanceRequestInput[]
    upsert?: DepartmentClearanceStatusUpsertWithWhereUniqueWithoutClearanceRequestInput | DepartmentClearanceStatusUpsertWithWhereUniqueWithoutClearanceRequestInput[]
    createMany?: DepartmentClearanceStatusCreateManyClearanceRequestInputEnvelope
    set?: DepartmentClearanceStatusWhereUniqueInput | DepartmentClearanceStatusWhereUniqueInput[]
    disconnect?: DepartmentClearanceStatusWhereUniqueInput | DepartmentClearanceStatusWhereUniqueInput[]
    delete?: DepartmentClearanceStatusWhereUniqueInput | DepartmentClearanceStatusWhereUniqueInput[]
    connect?: DepartmentClearanceStatusWhereUniqueInput | DepartmentClearanceStatusWhereUniqueInput[]
    update?: DepartmentClearanceStatusUpdateWithWhereUniqueWithoutClearanceRequestInput | DepartmentClearanceStatusUpdateWithWhereUniqueWithoutClearanceRequestInput[]
    updateMany?: DepartmentClearanceStatusUpdateManyWithWhereWithoutClearanceRequestInput | DepartmentClearanceStatusUpdateManyWithWhereWithoutClearanceRequestInput[]
    deleteMany?: DepartmentClearanceStatusScalarWhereInput | DepartmentClearanceStatusScalarWhereInput[]
  }

  export type ClearanceRequestCreateNestedOneWithoutDepartmentStatusesInput = {
    create?: XOR<ClearanceRequestCreateWithoutDepartmentStatusesInput, ClearanceRequestUncheckedCreateWithoutDepartmentStatusesInput>
    connectOrCreate?: ClearanceRequestCreateOrConnectWithoutDepartmentStatusesInput
    connect?: ClearanceRequestWhereUniqueInput
  }

  export type DepartmentCreateNestedOneWithoutDepartmentClearanceStatusesInput = {
    create?: XOR<DepartmentCreateWithoutDepartmentClearanceStatusesInput, DepartmentUncheckedCreateWithoutDepartmentClearanceStatusesInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutDepartmentClearanceStatusesInput
    connect?: DepartmentWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ClearanceRequestUpdateOneRequiredWithoutDepartmentStatusesNestedInput = {
    create?: XOR<ClearanceRequestCreateWithoutDepartmentStatusesInput, ClearanceRequestUncheckedCreateWithoutDepartmentStatusesInput>
    connectOrCreate?: ClearanceRequestCreateOrConnectWithoutDepartmentStatusesInput
    upsert?: ClearanceRequestUpsertWithoutDepartmentStatusesInput
    connect?: ClearanceRequestWhereUniqueInput
    update?: XOR<XOR<ClearanceRequestUpdateToOneWithWhereWithoutDepartmentStatusesInput, ClearanceRequestUpdateWithoutDepartmentStatusesInput>, ClearanceRequestUncheckedUpdateWithoutDepartmentStatusesInput>
  }

  export type DepartmentUpdateOneRequiredWithoutDepartmentClearanceStatusesNestedInput = {
    create?: XOR<DepartmentCreateWithoutDepartmentClearanceStatusesInput, DepartmentUncheckedCreateWithoutDepartmentClearanceStatusesInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutDepartmentClearanceStatusesInput
    upsert?: DepartmentUpsertWithoutDepartmentClearanceStatusesInput
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutDepartmentClearanceStatusesInput, DepartmentUpdateWithoutDepartmentClearanceStatusesInput>, DepartmentUncheckedUpdateWithoutDepartmentClearanceStatusesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ClearanceRequestCreateWithoutStudentInput = {
    overall_status?: string
    createdAt?: Date | string
    departmentStatuses?: DepartmentClearanceStatusCreateNestedManyWithoutClearanceRequestInput
  }

  export type ClearanceRequestUncheckedCreateWithoutStudentInput = {
    id?: number
    overall_status?: string
    createdAt?: Date | string
    departmentStatuses?: DepartmentClearanceStatusUncheckedCreateNestedManyWithoutClearanceRequestInput
  }

  export type ClearanceRequestCreateOrConnectWithoutStudentInput = {
    where: ClearanceRequestWhereUniqueInput
    create: XOR<ClearanceRequestCreateWithoutStudentInput, ClearanceRequestUncheckedCreateWithoutStudentInput>
  }

  export type ClearanceRequestCreateManyStudentInputEnvelope = {
    data: ClearanceRequestCreateManyStudentInput | ClearanceRequestCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type ClearanceRequestUpsertWithWhereUniqueWithoutStudentInput = {
    where: ClearanceRequestWhereUniqueInput
    update: XOR<ClearanceRequestUpdateWithoutStudentInput, ClearanceRequestUncheckedUpdateWithoutStudentInput>
    create: XOR<ClearanceRequestCreateWithoutStudentInput, ClearanceRequestUncheckedCreateWithoutStudentInput>
  }

  export type ClearanceRequestUpdateWithWhereUniqueWithoutStudentInput = {
    where: ClearanceRequestWhereUniqueInput
    data: XOR<ClearanceRequestUpdateWithoutStudentInput, ClearanceRequestUncheckedUpdateWithoutStudentInput>
  }

  export type ClearanceRequestUpdateManyWithWhereWithoutStudentInput = {
    where: ClearanceRequestScalarWhereInput
    data: XOR<ClearanceRequestUpdateManyMutationInput, ClearanceRequestUncheckedUpdateManyWithoutStudentInput>
  }

  export type ClearanceRequestScalarWhereInput = {
    AND?: ClearanceRequestScalarWhereInput | ClearanceRequestScalarWhereInput[]
    OR?: ClearanceRequestScalarWhereInput[]
    NOT?: ClearanceRequestScalarWhereInput | ClearanceRequestScalarWhereInput[]
    id?: IntFilter<"ClearanceRequest"> | number
    student_id?: IntFilter<"ClearanceRequest"> | number
    overall_status?: StringFilter<"ClearanceRequest"> | string
    createdAt?: DateTimeFilter<"ClearanceRequest"> | Date | string
  }

  export type DepartmentClearanceStatusCreateWithoutDepartmentInput = {
    status?: string
    comment?: string | null
    updated_at?: Date | string
    clearanceRequest: ClearanceRequestCreateNestedOneWithoutDepartmentStatusesInput
  }

  export type DepartmentClearanceStatusUncheckedCreateWithoutDepartmentInput = {
    id?: number
    clearance_request_id: number
    status?: string
    comment?: string | null
    updated_at?: Date | string
  }

  export type DepartmentClearanceStatusCreateOrConnectWithoutDepartmentInput = {
    where: DepartmentClearanceStatusWhereUniqueInput
    create: XOR<DepartmentClearanceStatusCreateWithoutDepartmentInput, DepartmentClearanceStatusUncheckedCreateWithoutDepartmentInput>
  }

  export type DepartmentClearanceStatusCreateManyDepartmentInputEnvelope = {
    data: DepartmentClearanceStatusCreateManyDepartmentInput | DepartmentClearanceStatusCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentClearanceStatusUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: DepartmentClearanceStatusWhereUniqueInput
    update: XOR<DepartmentClearanceStatusUpdateWithoutDepartmentInput, DepartmentClearanceStatusUncheckedUpdateWithoutDepartmentInput>
    create: XOR<DepartmentClearanceStatusCreateWithoutDepartmentInput, DepartmentClearanceStatusUncheckedCreateWithoutDepartmentInput>
  }

  export type DepartmentClearanceStatusUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: DepartmentClearanceStatusWhereUniqueInput
    data: XOR<DepartmentClearanceStatusUpdateWithoutDepartmentInput, DepartmentClearanceStatusUncheckedUpdateWithoutDepartmentInput>
  }

  export type DepartmentClearanceStatusUpdateManyWithWhereWithoutDepartmentInput = {
    where: DepartmentClearanceStatusScalarWhereInput
    data: XOR<DepartmentClearanceStatusUpdateManyMutationInput, DepartmentClearanceStatusUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type DepartmentClearanceStatusScalarWhereInput = {
    AND?: DepartmentClearanceStatusScalarWhereInput | DepartmentClearanceStatusScalarWhereInput[]
    OR?: DepartmentClearanceStatusScalarWhereInput[]
    NOT?: DepartmentClearanceStatusScalarWhereInput | DepartmentClearanceStatusScalarWhereInput[]
    id?: IntFilter<"DepartmentClearanceStatus"> | number
    clearance_request_id?: IntFilter<"DepartmentClearanceStatus"> | number
    department_id?: IntFilter<"DepartmentClearanceStatus"> | number
    status?: StringFilter<"DepartmentClearanceStatus"> | string
    comment?: StringNullableFilter<"DepartmentClearanceStatus"> | string | null
    updated_at?: DateTimeFilter<"DepartmentClearanceStatus"> | Date | string
  }

  export type UserCreateWithoutClearanceRequestsInput = {
    full_name: string
    email: string
    password: string
    role: string
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutClearanceRequestsInput = {
    id?: number
    full_name: string
    email: string
    password: string
    role: string
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutClearanceRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClearanceRequestsInput, UserUncheckedCreateWithoutClearanceRequestsInput>
  }

  export type DepartmentClearanceStatusCreateWithoutClearanceRequestInput = {
    status?: string
    comment?: string | null
    updated_at?: Date | string
    department: DepartmentCreateNestedOneWithoutDepartmentClearanceStatusesInput
  }

  export type DepartmentClearanceStatusUncheckedCreateWithoutClearanceRequestInput = {
    id?: number
    department_id: number
    status?: string
    comment?: string | null
    updated_at?: Date | string
  }

  export type DepartmentClearanceStatusCreateOrConnectWithoutClearanceRequestInput = {
    where: DepartmentClearanceStatusWhereUniqueInput
    create: XOR<DepartmentClearanceStatusCreateWithoutClearanceRequestInput, DepartmentClearanceStatusUncheckedCreateWithoutClearanceRequestInput>
  }

  export type DepartmentClearanceStatusCreateManyClearanceRequestInputEnvelope = {
    data: DepartmentClearanceStatusCreateManyClearanceRequestInput | DepartmentClearanceStatusCreateManyClearanceRequestInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutClearanceRequestsInput = {
    update: XOR<UserUpdateWithoutClearanceRequestsInput, UserUncheckedUpdateWithoutClearanceRequestsInput>
    create: XOR<UserCreateWithoutClearanceRequestsInput, UserUncheckedCreateWithoutClearanceRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClearanceRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClearanceRequestsInput, UserUncheckedUpdateWithoutClearanceRequestsInput>
  }

  export type UserUpdateWithoutClearanceRequestsInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutClearanceRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentClearanceStatusUpsertWithWhereUniqueWithoutClearanceRequestInput = {
    where: DepartmentClearanceStatusWhereUniqueInput
    update: XOR<DepartmentClearanceStatusUpdateWithoutClearanceRequestInput, DepartmentClearanceStatusUncheckedUpdateWithoutClearanceRequestInput>
    create: XOR<DepartmentClearanceStatusCreateWithoutClearanceRequestInput, DepartmentClearanceStatusUncheckedCreateWithoutClearanceRequestInput>
  }

  export type DepartmentClearanceStatusUpdateWithWhereUniqueWithoutClearanceRequestInput = {
    where: DepartmentClearanceStatusWhereUniqueInput
    data: XOR<DepartmentClearanceStatusUpdateWithoutClearanceRequestInput, DepartmentClearanceStatusUncheckedUpdateWithoutClearanceRequestInput>
  }

  export type DepartmentClearanceStatusUpdateManyWithWhereWithoutClearanceRequestInput = {
    where: DepartmentClearanceStatusScalarWhereInput
    data: XOR<DepartmentClearanceStatusUpdateManyMutationInput, DepartmentClearanceStatusUncheckedUpdateManyWithoutClearanceRequestInput>
  }

  export type ClearanceRequestCreateWithoutDepartmentStatusesInput = {
    overall_status?: string
    createdAt?: Date | string
    student: UserCreateNestedOneWithoutClearanceRequestsInput
  }

  export type ClearanceRequestUncheckedCreateWithoutDepartmentStatusesInput = {
    id?: number
    student_id: number
    overall_status?: string
    createdAt?: Date | string
  }

  export type ClearanceRequestCreateOrConnectWithoutDepartmentStatusesInput = {
    where: ClearanceRequestWhereUniqueInput
    create: XOR<ClearanceRequestCreateWithoutDepartmentStatusesInput, ClearanceRequestUncheckedCreateWithoutDepartmentStatusesInput>
  }

  export type DepartmentCreateWithoutDepartmentClearanceStatusesInput = {
    name: string
  }

  export type DepartmentUncheckedCreateWithoutDepartmentClearanceStatusesInput = {
    id?: number
    name: string
  }

  export type DepartmentCreateOrConnectWithoutDepartmentClearanceStatusesInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutDepartmentClearanceStatusesInput, DepartmentUncheckedCreateWithoutDepartmentClearanceStatusesInput>
  }

  export type ClearanceRequestUpsertWithoutDepartmentStatusesInput = {
    update: XOR<ClearanceRequestUpdateWithoutDepartmentStatusesInput, ClearanceRequestUncheckedUpdateWithoutDepartmentStatusesInput>
    create: XOR<ClearanceRequestCreateWithoutDepartmentStatusesInput, ClearanceRequestUncheckedCreateWithoutDepartmentStatusesInput>
    where?: ClearanceRequestWhereInput
  }

  export type ClearanceRequestUpdateToOneWithWhereWithoutDepartmentStatusesInput = {
    where?: ClearanceRequestWhereInput
    data: XOR<ClearanceRequestUpdateWithoutDepartmentStatusesInput, ClearanceRequestUncheckedUpdateWithoutDepartmentStatusesInput>
  }

  export type ClearanceRequestUpdateWithoutDepartmentStatusesInput = {
    overall_status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutClearanceRequestsNestedInput
  }

  export type ClearanceRequestUncheckedUpdateWithoutDepartmentStatusesInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    overall_status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentUpsertWithoutDepartmentClearanceStatusesInput = {
    update: XOR<DepartmentUpdateWithoutDepartmentClearanceStatusesInput, DepartmentUncheckedUpdateWithoutDepartmentClearanceStatusesInput>
    create: XOR<DepartmentCreateWithoutDepartmentClearanceStatusesInput, DepartmentUncheckedCreateWithoutDepartmentClearanceStatusesInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutDepartmentClearanceStatusesInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutDepartmentClearanceStatusesInput, DepartmentUncheckedUpdateWithoutDepartmentClearanceStatusesInput>
  }

  export type DepartmentUpdateWithoutDepartmentClearanceStatusesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentUncheckedUpdateWithoutDepartmentClearanceStatusesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ClearanceRequestCreateManyStudentInput = {
    id?: number
    overall_status?: string
    createdAt?: Date | string
  }

  export type ClearanceRequestUpdateWithoutStudentInput = {
    overall_status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departmentStatuses?: DepartmentClearanceStatusUpdateManyWithoutClearanceRequestNestedInput
  }

  export type ClearanceRequestUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    overall_status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departmentStatuses?: DepartmentClearanceStatusUncheckedUpdateManyWithoutClearanceRequestNestedInput
  }

  export type ClearanceRequestUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    overall_status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentClearanceStatusCreateManyDepartmentInput = {
    id?: number
    clearance_request_id: number
    status?: string
    comment?: string | null
    updated_at?: Date | string
  }

  export type DepartmentClearanceStatusUpdateWithoutDepartmentInput = {
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clearanceRequest?: ClearanceRequestUpdateOneRequiredWithoutDepartmentStatusesNestedInput
  }

  export type DepartmentClearanceStatusUncheckedUpdateWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    clearance_request_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentClearanceStatusUncheckedUpdateManyWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    clearance_request_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentClearanceStatusCreateManyClearanceRequestInput = {
    id?: number
    department_id: number
    status?: string
    comment?: string | null
    updated_at?: Date | string
  }

  export type DepartmentClearanceStatusUpdateWithoutClearanceRequestInput = {
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneRequiredWithoutDepartmentClearanceStatusesNestedInput
  }

  export type DepartmentClearanceStatusUncheckedUpdateWithoutClearanceRequestInput = {
    id?: IntFieldUpdateOperationsInput | number
    department_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentClearanceStatusUncheckedUpdateManyWithoutClearanceRequestInput = {
    id?: IntFieldUpdateOperationsInput | number
    department_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}